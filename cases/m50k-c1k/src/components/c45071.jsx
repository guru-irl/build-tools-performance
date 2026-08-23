import React from 'react';
const LABEL_45071 = 'component_45071';
export function Component45071({ value = 45071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45071, 'data-value': derived.doubled }, children);
}
export default Component45071;
