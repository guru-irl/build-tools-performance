import React from 'react';
const LABEL_5979 = 'component_5979';
export function Component5979({ value = 5979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5979, 'data-value': derived.doubled }, children);
}
export default Component5979;
