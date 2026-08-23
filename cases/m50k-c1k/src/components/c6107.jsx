import React from 'react';
const LABEL_6107 = 'component_6107';
export function Component6107({ value = 6107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6107, 'data-value': derived.doubled }, children);
}
export default Component6107;
