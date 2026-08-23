import React from 'react';
const LABEL_44820 = 'component_44820';
export function Component44820({ value = 44820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44820, 'data-value': derived.doubled }, children);
}
export default Component44820;
