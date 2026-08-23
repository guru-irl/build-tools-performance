import React from 'react';
const LABEL_45182 = 'component_45182';
export function Component45182({ value = 45182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45182, 'data-value': derived.doubled }, children);
}
export default Component45182;
