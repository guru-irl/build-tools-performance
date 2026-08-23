import React from 'react';
const LABEL_32177 = 'component_32177';
export function Component32177({ value = 32177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32177, 'data-value': derived.doubled }, children);
}
export default Component32177;
