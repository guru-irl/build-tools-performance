import React from 'react';
const LABEL_42422 = 'component_42422';
export function Component42422({ value = 42422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42422, 'data-value': derived.doubled }, children);
}
export default Component42422;
