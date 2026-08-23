import React from 'react';
const LABEL_13364 = 'component_13364';
export function Component13364({ value = 13364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13364, 'data-value': derived.doubled }, children);
}
export default Component13364;
