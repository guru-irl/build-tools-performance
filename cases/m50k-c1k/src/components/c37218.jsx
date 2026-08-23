import React from 'react';
const LABEL_37218 = 'component_37218';
export function Component37218({ value = 37218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37218, 'data-value': derived.doubled }, children);
}
export default Component37218;
