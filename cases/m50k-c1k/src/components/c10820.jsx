import React from 'react';
const LABEL_10820 = 'component_10820';
export function Component10820({ value = 10820, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10820, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10820, 'data-value': derived.doubled }, children);
}
export default Component10820;
