import React from 'react';
const LABEL_31482 = 'component_31482';
export function Component31482({ value = 31482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31482, 'data-value': derived.doubled }, children);
}
export default Component31482;
