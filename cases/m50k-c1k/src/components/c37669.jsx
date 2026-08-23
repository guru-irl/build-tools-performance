import React from 'react';
const LABEL_37669 = 'component_37669';
export function Component37669({ value = 37669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37669, 'data-value': derived.doubled }, children);
}
export default Component37669;
