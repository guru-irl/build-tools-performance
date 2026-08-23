import React from 'react';
const LABEL_42330 = 'component_42330';
export function Component42330({ value = 42330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42330, 'data-value': derived.doubled }, children);
}
export default Component42330;
