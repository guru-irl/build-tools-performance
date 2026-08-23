import React from 'react';
const LABEL_3142 = 'component_3142';
export function Component3142({ value = 3142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3142, 'data-value': derived.doubled }, children);
}
export default Component3142;
