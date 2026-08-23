import React from 'react';
const LABEL_18494 = 'component_18494';
export function Component18494({ value = 18494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18494, 'data-value': derived.doubled }, children);
}
export default Component18494;
