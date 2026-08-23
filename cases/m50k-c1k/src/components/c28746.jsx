import React from 'react';
const LABEL_28746 = 'component_28746';
export function Component28746({ value = 28746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28746, 'data-value': derived.doubled }, children);
}
export default Component28746;
