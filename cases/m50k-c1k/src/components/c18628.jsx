import React from 'react';
const LABEL_18628 = 'component_18628';
export function Component18628({ value = 18628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18628, 'data-value': derived.doubled }, children);
}
export default Component18628;
