import React from 'react';
const LABEL_18834 = 'component_18834';
export function Component18834({ value = 18834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18834, 'data-value': derived.doubled }, children);
}
export default Component18834;
