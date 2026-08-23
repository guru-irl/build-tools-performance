import React from 'react';
const LABEL_42883 = 'component_42883';
export function Component42883({ value = 42883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42883, 'data-value': derived.doubled }, children);
}
export default Component42883;
