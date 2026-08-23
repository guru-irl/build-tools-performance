import React from 'react';
const LABEL_18664 = 'component_18664';
export function Component18664({ value = 18664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18664, 'data-value': derived.doubled }, children);
}
export default Component18664;
