import React from 'react';
const LABEL_21862 = 'component_21862';
export function Component21862({ value = 21862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21862, 'data-value': derived.doubled }, children);
}
export default Component21862;
