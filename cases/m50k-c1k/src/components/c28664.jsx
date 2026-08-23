import React from 'react';
const LABEL_28664 = 'component_28664';
export function Component28664({ value = 28664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28664, 'data-value': derived.doubled }, children);
}
export default Component28664;
