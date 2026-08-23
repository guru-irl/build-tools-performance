import React from 'react';
const LABEL_42392 = 'component_42392';
export function Component42392({ value = 42392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42392, 'data-value': derived.doubled }, children);
}
export default Component42392;
