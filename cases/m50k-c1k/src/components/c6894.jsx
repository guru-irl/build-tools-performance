import React from 'react';
const LABEL_6894 = 'component_6894';
export function Component6894({ value = 6894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6894, 'data-value': derived.doubled }, children);
}
export default Component6894;
