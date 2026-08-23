import React from 'react';
const LABEL_5728 = 'component_5728';
export function Component5728({ value = 5728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5728, 'data-value': derived.doubled }, children);
}
export default Component5728;
