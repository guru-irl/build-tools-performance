import React from 'react';
const LABEL_37837 = 'component_37837';
export function Component37837({ value = 37837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37837, 'data-value': derived.doubled }, children);
}
export default Component37837;
