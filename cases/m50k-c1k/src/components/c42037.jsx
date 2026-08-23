import React from 'react';
const LABEL_42037 = 'component_42037';
export function Component42037({ value = 42037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42037, 'data-value': derived.doubled }, children);
}
export default Component42037;
