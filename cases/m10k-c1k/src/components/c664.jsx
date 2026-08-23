import React from 'react';
const LABEL_664 = 'component_664';
export function Component664({ value = 664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_664, 'data-value': derived.doubled }, children);
}
export default Component664;
