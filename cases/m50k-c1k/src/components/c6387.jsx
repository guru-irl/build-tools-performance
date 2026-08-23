import React from 'react';
const LABEL_6387 = 'component_6387';
export function Component6387({ value = 6387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6387, 'data-value': derived.doubled }, children);
}
export default Component6387;
