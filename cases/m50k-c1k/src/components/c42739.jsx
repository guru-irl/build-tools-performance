import React from 'react';
const LABEL_42739 = 'component_42739';
export function Component42739({ value = 42739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42739, 'data-value': derived.doubled }, children);
}
export default Component42739;
