import React from 'react';
const LABEL_28446 = 'component_28446';
export function Component28446({ value = 28446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28446, 'data-value': derived.doubled }, children);
}
export default Component28446;
