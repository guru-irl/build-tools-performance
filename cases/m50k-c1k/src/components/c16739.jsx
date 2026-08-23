import React from 'react';
const LABEL_16739 = 'component_16739';
export function Component16739({ value = 16739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16739, 'data-value': derived.doubled }, children);
}
export default Component16739;
