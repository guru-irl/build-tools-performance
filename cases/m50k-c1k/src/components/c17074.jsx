import React from 'react';
const LABEL_17074 = 'component_17074';
export function Component17074({ value = 17074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17074, 'data-value': derived.doubled }, children);
}
export default Component17074;
