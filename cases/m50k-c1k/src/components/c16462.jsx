import React from 'react';
const LABEL_16462 = 'component_16462';
export function Component16462({ value = 16462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16462, 'data-value': derived.doubled }, children);
}
export default Component16462;
