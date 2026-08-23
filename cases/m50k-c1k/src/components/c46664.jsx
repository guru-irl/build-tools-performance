import React from 'react';
const LABEL_46664 = 'component_46664';
export function Component46664({ value = 46664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46664, 'data-value': derived.doubled }, children);
}
export default Component46664;
