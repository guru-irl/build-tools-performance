import React from 'react';
const LABEL_45453 = 'component_45453';
export function Component45453({ value = 45453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45453, 'data-value': derived.doubled }, children);
}
export default Component45453;
