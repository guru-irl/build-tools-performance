import React from 'react';
const LABEL_8052 = 'component_8052';
export function Component8052({ value = 8052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8052, 'data-value': derived.doubled }, children);
}
export default Component8052;
