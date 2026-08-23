import React from 'react';
const LABEL_13980 = 'component_13980';
export function Component13980({ value = 13980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13980, 'data-value': derived.doubled }, children);
}
export default Component13980;
