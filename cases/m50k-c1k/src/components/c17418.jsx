import React from 'react';
const LABEL_17418 = 'component_17418';
export function Component17418({ value = 17418, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17418, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17418, 'data-value': derived.doubled }, children);
}
export default Component17418;
