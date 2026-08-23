import React from 'react';
const LABEL_17501 = 'component_17501';
export function Component17501({ value = 17501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17501, 'data-value': derived.doubled }, children);
}
export default Component17501;
