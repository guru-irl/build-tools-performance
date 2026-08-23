import React from 'react';
const LABEL_3866 = 'component_3866';
export function Component3866({ value = 3866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3866, 'data-value': derived.doubled }, children);
}
export default Component3866;
