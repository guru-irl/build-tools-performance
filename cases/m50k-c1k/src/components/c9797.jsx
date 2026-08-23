import React from 'react';
const LABEL_9797 = 'component_9797';
export function Component9797({ value = 9797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9797, 'data-value': derived.doubled }, children);
}
export default Component9797;
