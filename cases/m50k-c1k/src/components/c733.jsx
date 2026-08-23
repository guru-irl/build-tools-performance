import React from 'react';
const LABEL_733 = 'component_733';
export function Component733({ value = 733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_733, 'data-value': derived.doubled }, children);
}
export default Component733;
