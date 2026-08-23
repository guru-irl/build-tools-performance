import React from 'react';
const LABEL_5347 = 'component_5347';
export function Component5347({ value = 5347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5347, 'data-value': derived.doubled }, children);
}
export default Component5347;
