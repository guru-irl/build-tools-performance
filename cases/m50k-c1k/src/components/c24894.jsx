import React from 'react';
const LABEL_24894 = 'component_24894';
export function Component24894({ value = 24894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24894, 'data-value': derived.doubled }, children);
}
export default Component24894;
