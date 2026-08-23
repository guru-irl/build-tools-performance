import React from 'react';
const LABEL_33452 = 'component_33452';
export function Component33452({ value = 33452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33452, 'data-value': derived.doubled }, children);
}
export default Component33452;
