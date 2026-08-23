import React from 'react';
const LABEL_18488 = 'component_18488';
export function Component18488({ value = 18488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18488, 'data-value': derived.doubled }, children);
}
export default Component18488;
