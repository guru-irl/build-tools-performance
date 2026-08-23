import React from 'react';
const LABEL_20080 = 'component_20080';
export function Component20080({ value = 20080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20080, 'data-value': derived.doubled }, children);
}
export default Component20080;
