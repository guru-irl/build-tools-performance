import React from 'react';
const LABEL_7753 = 'component_7753';
export function Component7753({ value = 7753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7753, 'data-value': derived.doubled }, children);
}
export default Component7753;
