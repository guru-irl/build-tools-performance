import React from 'react';
const LABEL_29422 = 'component_29422';
export function Component29422({ value = 29422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29422, 'data-value': derived.doubled }, children);
}
export default Component29422;
