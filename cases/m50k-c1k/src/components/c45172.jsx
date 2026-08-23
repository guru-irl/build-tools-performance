import React from 'react';
const LABEL_45172 = 'component_45172';
export function Component45172({ value = 45172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45172, 'data-value': derived.doubled }, children);
}
export default Component45172;
