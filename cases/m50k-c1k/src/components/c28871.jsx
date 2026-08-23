import React from 'react';
const LABEL_28871 = 'component_28871';
export function Component28871({ value = 28871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28871, 'data-value': derived.doubled }, children);
}
export default Component28871;
