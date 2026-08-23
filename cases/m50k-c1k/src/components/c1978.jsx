import React from 'react';
const LABEL_1978 = 'component_1978';
export function Component1978({ value = 1978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1978, 'data-value': derived.doubled }, children);
}
export default Component1978;
