import React from 'react';
const LABEL_44988 = 'component_44988';
export function Component44988({ value = 44988, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44988, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44988, 'data-value': derived.doubled }, children);
}
export default Component44988;
