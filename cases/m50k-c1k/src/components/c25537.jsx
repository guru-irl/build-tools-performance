import React from 'react';
const LABEL_25537 = 'component_25537';
export function Component25537({ value = 25537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25537, 'data-value': derived.doubled }, children);
}
export default Component25537;
