import React from 'react';
const LABEL_37240 = 'component_37240';
export function Component37240({ value = 37240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37240, 'data-value': derived.doubled }, children);
}
export default Component37240;
