import React from 'react';
const LABEL_25357 = 'component_25357';
export function Component25357({ value = 25357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25357, 'data-value': derived.doubled }, children);
}
export default Component25357;
