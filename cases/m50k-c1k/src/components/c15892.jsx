import React from 'react';
const LABEL_15892 = 'component_15892';
export function Component15892({ value = 15892, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15892, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15892, 'data-value': derived.doubled }, children);
}
export default Component15892;
