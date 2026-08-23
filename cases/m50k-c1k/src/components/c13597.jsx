import React from 'react';
const LABEL_13597 = 'component_13597';
export function Component13597({ value = 13597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13597, 'data-value': derived.doubled }, children);
}
export default Component13597;
