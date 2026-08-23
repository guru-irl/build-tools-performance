import React from 'react';
const LABEL_23142 = 'component_23142';
export function Component23142({ value = 23142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23142, 'data-value': derived.doubled }, children);
}
export default Component23142;
