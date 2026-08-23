import React from 'react';
const LABEL_5057 = 'component_5057';
export function Component5057({ value = 5057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5057, 'data-value': derived.doubled }, children);
}
export default Component5057;
