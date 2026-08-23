import React from 'react';
const LABEL_4597 = 'component_4597';
export function Component4597({ value = 4597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4597, 'data-value': derived.doubled }, children);
}
export default Component4597;
