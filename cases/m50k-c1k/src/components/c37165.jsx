import React from 'react';
const LABEL_37165 = 'component_37165';
export function Component37165({ value = 37165, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37165, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37165, 'data-value': derived.doubled }, children);
}
export default Component37165;
