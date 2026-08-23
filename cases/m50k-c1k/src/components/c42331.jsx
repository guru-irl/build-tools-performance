import React from 'react';
const LABEL_42331 = 'component_42331';
export function Component42331({ value = 42331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42331, 'data-value': derived.doubled }, children);
}
export default Component42331;
