import React from 'react';
const LABEL_8897 = 'component_8897';
export function Component8897({ value = 8897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8897, 'data-value': derived.doubled }, children);
}
export default Component8897;
