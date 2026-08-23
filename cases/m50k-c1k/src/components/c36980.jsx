import React from 'react';
const LABEL_36980 = 'component_36980';
export function Component36980({ value = 36980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36980, 'data-value': derived.doubled }, children);
}
export default Component36980;
