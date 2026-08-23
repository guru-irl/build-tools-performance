import React from 'react';
const LABEL_8405 = 'component_8405';
export function Component8405({ value = 8405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8405, 'data-value': derived.doubled }, children);
}
export default Component8405;
