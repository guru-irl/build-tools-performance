import React from 'react';
const LABEL_7102 = 'component_7102';
export function Component7102({ value = 7102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7102, 'data-value': derived.doubled }, children);
}
export default Component7102;
