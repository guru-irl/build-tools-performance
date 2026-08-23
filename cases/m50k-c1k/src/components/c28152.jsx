import React from 'react';
const LABEL_28152 = 'component_28152';
export function Component28152({ value = 28152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28152, 'data-value': derived.doubled }, children);
}
export default Component28152;
