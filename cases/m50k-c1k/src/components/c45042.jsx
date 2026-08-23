import React from 'react';
const LABEL_45042 = 'component_45042';
export function Component45042({ value = 45042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45042, 'data-value': derived.doubled }, children);
}
export default Component45042;
