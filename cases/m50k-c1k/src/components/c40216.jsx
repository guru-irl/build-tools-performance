import React from 'react';
const LABEL_40216 = 'component_40216';
export function Component40216({ value = 40216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40216, 'data-value': derived.doubled }, children);
}
export default Component40216;
