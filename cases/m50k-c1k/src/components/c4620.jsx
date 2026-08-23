import React from 'react';
const LABEL_4620 = 'component_4620';
export function Component4620({ value = 4620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4620, 'data-value': derived.doubled }, children);
}
export default Component4620;
