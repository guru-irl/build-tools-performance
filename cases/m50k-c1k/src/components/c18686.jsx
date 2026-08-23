import React from 'react';
const LABEL_18686 = 'component_18686';
export function Component18686({ value = 18686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18686, 'data-value': derived.doubled }, children);
}
export default Component18686;
