import React from 'react';
const LABEL_14293 = 'component_14293';
export function Component14293({ value = 14293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14293, 'data-value': derived.doubled }, children);
}
export default Component14293;
