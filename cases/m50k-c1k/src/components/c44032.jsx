import React from 'react';
const LABEL_44032 = 'component_44032';
export function Component44032({ value = 44032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44032, 'data-value': derived.doubled }, children);
}
export default Component44032;
