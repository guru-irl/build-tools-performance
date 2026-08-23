import React from 'react';
const LABEL_45801 = 'component_45801';
export function Component45801({ value = 45801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45801, 'data-value': derived.doubled }, children);
}
export default Component45801;
