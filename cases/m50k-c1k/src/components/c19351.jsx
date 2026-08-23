import React from 'react';
const LABEL_19351 = 'component_19351';
export function Component19351({ value = 19351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19351, 'data-value': derived.doubled }, children);
}
export default Component19351;
