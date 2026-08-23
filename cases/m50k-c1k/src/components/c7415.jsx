import React from 'react';
const LABEL_7415 = 'component_7415';
export function Component7415({ value = 7415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7415, 'data-value': derived.doubled }, children);
}
export default Component7415;
