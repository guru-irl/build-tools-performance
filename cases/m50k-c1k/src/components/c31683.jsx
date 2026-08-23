import React from 'react';
const LABEL_31683 = 'component_31683';
export function Component31683({ value = 31683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31683, 'data-value': derived.doubled }, children);
}
export default Component31683;
