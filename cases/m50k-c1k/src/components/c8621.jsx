import React from 'react';
const LABEL_8621 = 'component_8621';
export function Component8621({ value = 8621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8621, 'data-value': derived.doubled }, children);
}
export default Component8621;
