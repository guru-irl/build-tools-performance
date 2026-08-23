import React from 'react';
const LABEL_46216 = 'component_46216';
export function Component46216({ value = 46216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46216, 'data-value': derived.doubled }, children);
}
export default Component46216;
