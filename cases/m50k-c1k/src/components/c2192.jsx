import React from 'react';
const LABEL_2192 = 'component_2192';
export function Component2192({ value = 2192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2192, 'data-value': derived.doubled }, children);
}
export default Component2192;
