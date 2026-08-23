import React from 'react';
const LABEL_45452 = 'component_45452';
export function Component45452({ value = 45452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45452, 'data-value': derived.doubled }, children);
}
export default Component45452;
