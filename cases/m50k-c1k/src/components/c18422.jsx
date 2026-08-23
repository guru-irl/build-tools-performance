import React from 'react';
const LABEL_18422 = 'component_18422';
export function Component18422({ value = 18422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18422, 'data-value': derived.doubled }, children);
}
export default Component18422;
