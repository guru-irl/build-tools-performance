import React from 'react';
const LABEL_41683 = 'component_41683';
export function Component41683({ value = 41683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41683, 'data-value': derived.doubled }, children);
}
export default Component41683;
