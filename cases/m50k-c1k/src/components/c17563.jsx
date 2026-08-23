import React from 'react';
const LABEL_17563 = 'component_17563';
export function Component17563({ value = 17563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17563, 'data-value': derived.doubled }, children);
}
export default Component17563;
