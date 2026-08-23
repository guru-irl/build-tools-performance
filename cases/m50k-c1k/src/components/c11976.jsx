import React from 'react';
const LABEL_11976 = 'component_11976';
export function Component11976({ value = 11976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11976, 'data-value': derived.doubled }, children);
}
export default Component11976;
