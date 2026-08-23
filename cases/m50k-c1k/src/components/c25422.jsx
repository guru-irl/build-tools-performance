import React from 'react';
const LABEL_25422 = 'component_25422';
export function Component25422({ value = 25422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25422, 'data-value': derived.doubled }, children);
}
export default Component25422;
