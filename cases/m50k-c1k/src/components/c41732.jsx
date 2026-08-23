import React from 'react';
const LABEL_41732 = 'component_41732';
export function Component41732({ value = 41732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41732, 'data-value': derived.doubled }, children);
}
export default Component41732;
