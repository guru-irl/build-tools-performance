import React from 'react';
const LABEL_32974 = 'component_32974';
export function Component32974({ value = 32974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32974, 'data-value': derived.doubled }, children);
}
export default Component32974;
