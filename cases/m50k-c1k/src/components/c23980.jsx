import React from 'react';
const LABEL_23980 = 'component_23980';
export function Component23980({ value = 23980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23980, 'data-value': derived.doubled }, children);
}
export default Component23980;
