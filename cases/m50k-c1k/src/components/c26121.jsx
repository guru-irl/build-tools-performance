import React from 'react';
const LABEL_26121 = 'component_26121';
export function Component26121({ value = 26121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26121, 'data-value': derived.doubled }, children);
}
export default Component26121;
