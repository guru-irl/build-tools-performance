import React from 'react';
const LABEL_42385 = 'component_42385';
export function Component42385({ value = 42385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42385, 'data-value': derived.doubled }, children);
}
export default Component42385;
