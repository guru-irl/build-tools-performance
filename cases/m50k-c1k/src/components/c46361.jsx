import React from 'react';
const LABEL_46361 = 'component_46361';
export function Component46361({ value = 46361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46361, 'data-value': derived.doubled }, children);
}
export default Component46361;
