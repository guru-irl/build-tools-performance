import React from 'react';
const LABEL_8353 = 'component_8353';
export function Component8353({ value = 8353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8353, 'data-value': derived.doubled }, children);
}
export default Component8353;
