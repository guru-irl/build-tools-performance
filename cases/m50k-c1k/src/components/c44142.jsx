import React from 'react';
const LABEL_44142 = 'component_44142';
export function Component44142({ value = 44142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44142, 'data-value': derived.doubled }, children);
}
export default Component44142;
