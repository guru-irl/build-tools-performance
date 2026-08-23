import React from 'react';
const LABEL_32489 = 'component_32489';
export function Component32489({ value = 32489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32489, 'data-value': derived.doubled }, children);
}
export default Component32489;
