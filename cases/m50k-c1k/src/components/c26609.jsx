import React from 'react';
const LABEL_26609 = 'component_26609';
export function Component26609({ value = 26609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26609, 'data-value': derived.doubled }, children);
}
export default Component26609;
