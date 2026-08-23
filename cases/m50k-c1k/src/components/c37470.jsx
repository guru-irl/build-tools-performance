import React from 'react';
const LABEL_37470 = 'component_37470';
export function Component37470({ value = 37470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37470, 'data-value': derived.doubled }, children);
}
export default Component37470;
