import React from 'react';
const LABEL_12894 = 'component_12894';
export function Component12894({ value = 12894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12894, 'data-value': derived.doubled }, children);
}
export default Component12894;
