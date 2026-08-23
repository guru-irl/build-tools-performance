import React from 'react';
const LABEL_24877 = 'component_24877';
export function Component24877({ value = 24877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24877, 'data-value': derived.doubled }, children);
}
export default Component24877;
