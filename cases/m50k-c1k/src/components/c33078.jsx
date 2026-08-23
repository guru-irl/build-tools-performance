import React from 'react';
const LABEL_33078 = 'component_33078';
export function Component33078({ value = 33078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33078, 'data-value': derived.doubled }, children);
}
export default Component33078;
