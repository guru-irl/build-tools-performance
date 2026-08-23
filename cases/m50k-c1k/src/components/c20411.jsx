import React from 'react';
const LABEL_20411 = 'component_20411';
export function Component20411({ value = 20411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20411, 'data-value': derived.doubled }, children);
}
export default Component20411;
