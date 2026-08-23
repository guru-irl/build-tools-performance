import React from 'react';
const LABEL_14411 = 'component_14411';
export function Component14411({ value = 14411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14411, 'data-value': derived.doubled }, children);
}
export default Component14411;
