import React from 'react';
const LABEL_8894 = 'component_8894';
export function Component8894({ value = 8894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8894, 'data-value': derived.doubled }, children);
}
export default Component8894;
