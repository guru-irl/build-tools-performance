import React from 'react';
const LABEL_24873 = 'component_24873';
export function Component24873({ value = 24873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24873, 'data-value': derived.doubled }, children);
}
export default Component24873;
