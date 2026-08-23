import React from 'react';
const LABEL_20513 = 'component_20513';
export function Component20513({ value = 20513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20513, 'data-value': derived.doubled }, children);
}
export default Component20513;
