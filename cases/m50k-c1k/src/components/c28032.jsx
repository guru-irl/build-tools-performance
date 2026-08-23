import React from 'react';
const LABEL_28032 = 'component_28032';
export function Component28032({ value = 28032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28032, 'data-value': derived.doubled }, children);
}
export default Component28032;
