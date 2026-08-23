import React from 'react';
const LABEL_42915 = 'component_42915';
export function Component42915({ value = 42915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42915, 'data-value': derived.doubled }, children);
}
export default Component42915;
