import React from 'react';
const LABEL_8740 = 'component_8740';
export function Component8740({ value = 8740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8740, 'data-value': derived.doubled }, children);
}
export default Component8740;
