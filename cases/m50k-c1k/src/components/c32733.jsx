import React from 'react';
const LABEL_32733 = 'component_32733';
export function Component32733({ value = 32733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32733, 'data-value': derived.doubled }, children);
}
export default Component32733;
