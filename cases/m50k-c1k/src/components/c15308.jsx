import React from 'react';
const LABEL_15308 = 'component_15308';
export function Component15308({ value = 15308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15308, 'data-value': derived.doubled }, children);
}
export default Component15308;
