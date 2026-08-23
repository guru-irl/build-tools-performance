import React from 'react';
const LABEL_42645 = 'component_42645';
export function Component42645({ value = 42645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42645, 'data-value': derived.doubled }, children);
}
export default Component42645;
