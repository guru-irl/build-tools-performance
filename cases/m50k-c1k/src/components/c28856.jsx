import React from 'react';
const LABEL_28856 = 'component_28856';
export function Component28856({ value = 28856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28856, 'data-value': derived.doubled }, children);
}
export default Component28856;
