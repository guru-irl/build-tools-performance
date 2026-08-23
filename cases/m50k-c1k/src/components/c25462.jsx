import React from 'react';
const LABEL_25462 = 'component_25462';
export function Component25462({ value = 25462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25462, 'data-value': derived.doubled }, children);
}
export default Component25462;
