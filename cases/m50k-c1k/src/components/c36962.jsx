import React from 'react';
const LABEL_36962 = 'component_36962';
export function Component36962({ value = 36962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36962, 'data-value': derived.doubled }, children);
}
export default Component36962;
