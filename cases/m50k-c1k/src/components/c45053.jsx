import React from 'react';
const LABEL_45053 = 'component_45053';
export function Component45053({ value = 45053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45053, 'data-value': derived.doubled }, children);
}
export default Component45053;
