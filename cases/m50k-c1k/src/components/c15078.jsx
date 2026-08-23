import React from 'react';
const LABEL_15078 = 'component_15078';
export function Component15078({ value = 15078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15078, 'data-value': derived.doubled }, children);
}
export default Component15078;
