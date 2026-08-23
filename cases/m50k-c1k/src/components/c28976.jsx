import React from 'react';
const LABEL_28976 = 'component_28976';
export function Component28976({ value = 28976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28976, 'data-value': derived.doubled }, children);
}
export default Component28976;
