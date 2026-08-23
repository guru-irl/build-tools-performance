import React from 'react';
const LABEL_20710 = 'component_20710';
export function Component20710({ value = 20710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20710, 'data-value': derived.doubled }, children);
}
export default Component20710;
