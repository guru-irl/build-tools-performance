import React from 'react';
const LABEL_228 = 'component_228';
export function Component228({ value = 228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_228, 'data-value': derived.doubled }, children);
}
export default Component228;
