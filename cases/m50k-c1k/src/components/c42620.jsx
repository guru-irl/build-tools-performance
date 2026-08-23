import React from 'react';
const LABEL_42620 = 'component_42620';
export function Component42620({ value = 42620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42620, 'data-value': derived.doubled }, children);
}
export default Component42620;
