import React from 'react';
const LABEL_44817 = 'component_44817';
export function Component44817({ value = 44817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44817, 'data-value': derived.doubled }, children);
}
export default Component44817;
