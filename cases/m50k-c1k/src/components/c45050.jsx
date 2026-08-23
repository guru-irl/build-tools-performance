import React from 'react';
const LABEL_45050 = 'component_45050';
export function Component45050({ value = 45050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45050, 'data-value': derived.doubled }, children);
}
export default Component45050;
