import React from 'react';
const LABEL_14204 = 'component_14204';
export function Component14204({ value = 14204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14204, 'data-value': derived.doubled }, children);
}
export default Component14204;
