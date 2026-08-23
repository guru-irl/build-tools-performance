import React from 'react';
const LABEL_2664 = 'component_2664';
export function Component2664({ value = 2664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2664, 'data-value': derived.doubled }, children);
}
export default Component2664;
