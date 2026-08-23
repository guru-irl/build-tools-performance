import React from 'react';
const LABEL_42530 = 'component_42530';
export function Component42530({ value = 42530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42530, 'data-value': derived.doubled }, children);
}
export default Component42530;
