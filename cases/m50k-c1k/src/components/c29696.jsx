import React from 'react';
const LABEL_29696 = 'component_29696';
export function Component29696({ value = 29696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29696, 'data-value': derived.doubled }, children);
}
export default Component29696;
