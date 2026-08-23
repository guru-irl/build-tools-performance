import React from 'react';
const LABEL_1974 = 'component_1974';
export function Component1974({ value = 1974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1974, 'data-value': derived.doubled }, children);
}
export default Component1974;
