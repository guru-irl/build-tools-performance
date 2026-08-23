import React from 'react';
const LABEL_5358 = 'component_5358';
export function Component5358({ value = 5358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5358, 'data-value': derived.doubled }, children);
}
export default Component5358;
