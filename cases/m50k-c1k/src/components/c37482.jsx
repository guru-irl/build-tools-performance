import React from 'react';
const LABEL_37482 = 'component_37482';
export function Component37482({ value = 37482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37482, 'data-value': derived.doubled }, children);
}
export default Component37482;
