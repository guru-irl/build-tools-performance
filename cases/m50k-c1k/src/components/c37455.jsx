import React from 'react';
const LABEL_37455 = 'component_37455';
export function Component37455({ value = 37455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37455, 'data-value': derived.doubled }, children);
}
export default Component37455;
