import React from 'react';
const LABEL_5931 = 'component_5931';
export function Component5931({ value = 5931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5931, 'data-value': derived.doubled }, children);
}
export default Component5931;
