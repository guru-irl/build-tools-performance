import React from 'react';
const LABEL_42234 = 'component_42234';
export function Component42234({ value = 42234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42234, 'data-value': derived.doubled }, children);
}
export default Component42234;
