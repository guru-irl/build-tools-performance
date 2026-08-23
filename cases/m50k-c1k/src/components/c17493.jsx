import React from 'react';
const LABEL_17493 = 'component_17493';
export function Component17493({ value = 17493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17493, 'data-value': derived.doubled }, children);
}
export default Component17493;
