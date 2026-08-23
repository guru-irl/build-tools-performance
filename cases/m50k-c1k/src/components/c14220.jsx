import React from 'react';
const LABEL_14220 = 'component_14220';
export function Component14220({ value = 14220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14220, 'data-value': derived.doubled }, children);
}
export default Component14220;
