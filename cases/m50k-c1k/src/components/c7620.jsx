import React from 'react';
const LABEL_7620 = 'component_7620';
export function Component7620({ value = 7620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7620, 'data-value': derived.doubled }, children);
}
export default Component7620;
