import React from 'react';
const LABEL_13962 = 'component_13962';
export function Component13962({ value = 13962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13962, 'data-value': derived.doubled }, children);
}
export default Component13962;
