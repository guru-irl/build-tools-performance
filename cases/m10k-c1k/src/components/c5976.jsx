import React from 'react';
const LABEL_5976 = 'component_5976';
export function Component5976({ value = 5976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5976, 'data-value': derived.doubled }, children);
}
export default Component5976;
