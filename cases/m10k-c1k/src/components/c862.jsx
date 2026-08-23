import React from 'react';
const LABEL_862 = 'component_862';
export function Component862({ value = 862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_862, 'data-value': derived.doubled }, children);
}
export default Component862;
