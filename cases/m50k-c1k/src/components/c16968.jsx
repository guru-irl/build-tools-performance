import React from 'react';
const LABEL_16968 = 'component_16968';
export function Component16968({ value = 16968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16968, 'data-value': derived.doubled }, children);
}
export default Component16968;
