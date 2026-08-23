import React from 'react';
const LABEL_36894 = 'component_36894';
export function Component36894({ value = 36894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36894, 'data-value': derived.doubled }, children);
}
export default Component36894;
