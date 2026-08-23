import React from 'react';
const LABEL_40664 = 'component_40664';
export function Component40664({ value = 40664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40664, 'data-value': derived.doubled }, children);
}
export default Component40664;
