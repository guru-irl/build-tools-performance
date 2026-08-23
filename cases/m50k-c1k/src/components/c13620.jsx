import React from 'react';
const LABEL_13620 = 'component_13620';
export function Component13620({ value = 13620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13620, 'data-value': derived.doubled }, children);
}
export default Component13620;
