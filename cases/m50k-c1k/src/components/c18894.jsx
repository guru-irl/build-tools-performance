import React from 'react';
const LABEL_18894 = 'component_18894';
export function Component18894({ value = 18894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18894, 'data-value': derived.doubled }, children);
}
export default Component18894;
