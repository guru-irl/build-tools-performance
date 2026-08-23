import React from 'react';
const LABEL_19926 = 'component_19926';
export function Component19926({ value = 19926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19926, 'data-value': derived.doubled }, children);
}
export default Component19926;
