import React from 'react';
const LABEL_46597 = 'component_46597';
export function Component46597({ value = 46597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46597, 'data-value': derived.doubled }, children);
}
export default Component46597;
