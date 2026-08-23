import React from 'react';
const LABEL_28096 = 'component_28096';
export function Component28096({ value = 28096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28096, 'data-value': derived.doubled }, children);
}
export default Component28096;
