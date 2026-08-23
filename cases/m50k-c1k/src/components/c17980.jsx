import React from 'react';
const LABEL_17980 = 'component_17980';
export function Component17980({ value = 17980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17980, 'data-value': derived.doubled }, children);
}
export default Component17980;
