import React from 'react';
const LABEL_26862 = 'component_26862';
export function Component26862({ value = 26862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26862, 'data-value': derived.doubled }, children);
}
export default Component26862;
