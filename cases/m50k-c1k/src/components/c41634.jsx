import React from 'react';
const LABEL_41634 = 'component_41634';
export function Component41634({ value = 41634, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41634, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41634, 'data-value': derived.doubled }, children);
}
export default Component41634;
