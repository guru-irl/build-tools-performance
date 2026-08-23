import React from 'react';
const LABEL_19725 = 'component_19725';
export function Component19725({ value = 19725, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19725, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19725, 'data-value': derived.doubled }, children);
}
export default Component19725;
