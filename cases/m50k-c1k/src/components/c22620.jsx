import React from 'react';
const LABEL_22620 = 'component_22620';
export function Component22620({ value = 22620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22620, 'data-value': derived.doubled }, children);
}
export default Component22620;
