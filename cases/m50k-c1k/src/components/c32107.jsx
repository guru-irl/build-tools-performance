import React from 'react';
const LABEL_32107 = 'component_32107';
export function Component32107({ value = 32107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32107, 'data-value': derived.doubled }, children);
}
export default Component32107;
