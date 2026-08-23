import React from 'react';
const LABEL_17436 = 'component_17436';
export function Component17436({ value = 17436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17436, 'data-value': derived.doubled }, children);
}
export default Component17436;
