import React from 'react';
const LABEL_11358 = 'component_11358';
export function Component11358({ value = 11358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11358, 'data-value': derived.doubled }, children);
}
export default Component11358;
