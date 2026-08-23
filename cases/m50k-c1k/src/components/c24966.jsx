import React from 'react';
const LABEL_24966 = 'component_24966';
export function Component24966({ value = 24966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24966, 'data-value': derived.doubled }, children);
}
export default Component24966;
