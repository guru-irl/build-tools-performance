import React from 'react';
const LABEL_18288 = 'component_18288';
export function Component18288({ value = 18288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18288, 'data-value': derived.doubled }, children);
}
export default Component18288;
