import React from 'react';
const LABEL_28121 = 'component_28121';
export function Component28121({ value = 28121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28121, 'data-value': derived.doubled }, children);
}
export default Component28121;
