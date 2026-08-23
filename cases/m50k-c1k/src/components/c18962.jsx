import React from 'react';
const LABEL_18962 = 'component_18962';
export function Component18962({ value = 18962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18962, 'data-value': derived.doubled }, children);
}
export default Component18962;
