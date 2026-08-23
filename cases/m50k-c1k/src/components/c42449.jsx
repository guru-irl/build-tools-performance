import React from 'react';
const LABEL_42449 = 'component_42449';
export function Component42449({ value = 42449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42449, 'data-value': derived.doubled }, children);
}
export default Component42449;
