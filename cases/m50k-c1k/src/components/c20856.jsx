import React from 'react';
const LABEL_20856 = 'component_20856';
export function Component20856({ value = 20856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20856, 'data-value': derived.doubled }, children);
}
export default Component20856;
