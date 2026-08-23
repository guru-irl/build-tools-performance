import React from 'react';
const LABEL_13914 = 'component_13914';
export function Component13914({ value = 13914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13914, 'data-value': derived.doubled }, children);
}
export default Component13914;
