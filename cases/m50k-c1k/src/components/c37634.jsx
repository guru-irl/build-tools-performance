import React from 'react';
const LABEL_37634 = 'component_37634';
export function Component37634({ value = 37634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37634, 'data-value': derived.doubled }, children);
}
export default Component37634;
