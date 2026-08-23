import React from 'react';
const LABEL_17261 = 'component_17261';
export function Component17261({ value = 17261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17261, 'data-value': derived.doubled }, children);
}
export default Component17261;
