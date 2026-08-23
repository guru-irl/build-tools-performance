import React from 'react';
const LABEL_37733 = 'component_37733';
export function Component37733({ value = 37733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37733, 'data-value': derived.doubled }, children);
}
export default Component37733;
