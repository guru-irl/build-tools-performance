import React from 'react';
const LABEL_41697 = 'component_41697';
export function Component41697({ value = 41697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41697, 'data-value': derived.doubled }, children);
}
export default Component41697;
