import React from 'react';
const LABEL_8976 = 'component_8976';
export function Component8976({ value = 8976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8976, 'data-value': derived.doubled }, children);
}
export default Component8976;
