import React from 'react';
const LABEL_40689 = 'component_40689';
export function Component40689({ value = 40689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40689, 'data-value': derived.doubled }, children);
}
export default Component40689;
