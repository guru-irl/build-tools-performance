import React from 'react';
const LABEL_44664 = 'component_44664';
export function Component44664({ value = 44664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44664, 'data-value': derived.doubled }, children);
}
export default Component44664;
