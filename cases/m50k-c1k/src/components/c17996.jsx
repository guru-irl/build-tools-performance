import React from 'react';
const LABEL_17996 = 'component_17996';
export function Component17996({ value = 17996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17996, 'data-value': derived.doubled }, children);
}
export default Component17996;
