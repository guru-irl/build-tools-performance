import React from 'react';
const LABEL_5258 = 'component_5258';
export function Component5258({ value = 5258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5258, 'data-value': derived.doubled }, children);
}
export default Component5258;
