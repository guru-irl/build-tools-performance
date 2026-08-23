import React from 'react';
const LABEL_8931 = 'component_8931';
export function Component8931({ value = 8931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8931, 'data-value': derived.doubled }, children);
}
export default Component8931;
