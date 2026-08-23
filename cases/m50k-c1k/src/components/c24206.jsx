import React from 'react';
const LABEL_24206 = 'component_24206';
export function Component24206({ value = 24206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24206, 'data-value': derived.doubled }, children);
}
export default Component24206;
