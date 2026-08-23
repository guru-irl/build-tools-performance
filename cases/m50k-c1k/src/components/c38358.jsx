import React from 'react';
const LABEL_38358 = 'component_38358';
export function Component38358({ value = 38358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38358, 'data-value': derived.doubled }, children);
}
export default Component38358;
