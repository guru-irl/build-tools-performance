import React from 'react';
const LABEL_18165 = 'component_18165';
export function Component18165({ value = 18165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18165, 'data-value': derived.doubled }, children);
}
export default Component18165;
