import React from 'react';
const LABEL_28465 = 'component_28465';
export function Component28465({ value = 28465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28465, 'data-value': derived.doubled }, children);
}
export default Component28465;
