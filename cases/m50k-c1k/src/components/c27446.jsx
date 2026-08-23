import React from 'react';
const LABEL_27446 = 'component_27446';
export function Component27446({ value = 27446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27446, 'data-value': derived.doubled }, children);
}
export default Component27446;
