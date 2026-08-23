import React from 'react';
const LABEL_34962 = 'component_34962';
export function Component34962({ value = 34962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34962, 'data-value': derived.doubled }, children);
}
export default Component34962;
