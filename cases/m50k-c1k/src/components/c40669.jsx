import React from 'react';
const LABEL_40669 = 'component_40669';
export function Component40669({ value = 40669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40669, 'data-value': derived.doubled }, children);
}
export default Component40669;
