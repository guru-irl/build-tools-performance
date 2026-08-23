import React from 'react';
const LABEL_33415 = 'component_33415';
export function Component33415({ value = 33415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33415, 'data-value': derived.doubled }, children);
}
export default Component33415;
