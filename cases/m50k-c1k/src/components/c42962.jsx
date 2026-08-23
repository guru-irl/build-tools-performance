import React from 'react';
const LABEL_42962 = 'component_42962';
export function Component42962({ value = 42962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42962, 'data-value': derived.doubled }, children);
}
export default Component42962;
