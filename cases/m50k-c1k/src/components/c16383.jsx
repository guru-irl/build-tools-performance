import React from 'react';
const LABEL_16383 = 'component_16383';
export function Component16383({ value = 16383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16383, 'data-value': derived.doubled }, children);
}
export default Component16383;
