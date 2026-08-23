import React from 'react';
const LABEL_40777 = 'component_40777';
export function Component40777({ value = 40777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40777, 'data-value': derived.doubled }, children);
}
export default Component40777;
