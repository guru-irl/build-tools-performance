import React from 'react';
const LABEL_14664 = 'component_14664';
export function Component14664({ value = 14664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14664, 'data-value': derived.doubled }, children);
}
export default Component14664;
