import React from 'react';
const LABEL_8620 = 'component_8620';
export function Component8620({ value = 8620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8620, 'data-value': derived.doubled }, children);
}
export default Component8620;
