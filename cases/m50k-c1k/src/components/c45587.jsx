import React from 'react';
const LABEL_45587 = 'component_45587';
export function Component45587({ value = 45587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45587, 'data-value': derived.doubled }, children);
}
export default Component45587;
