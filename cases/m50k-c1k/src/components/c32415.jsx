import React from 'react';
const LABEL_32415 = 'component_32415';
export function Component32415({ value = 32415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32415, 'data-value': derived.doubled }, children);
}
export default Component32415;
