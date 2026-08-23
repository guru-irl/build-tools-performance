import React from 'react';
const LABEL_14974 = 'component_14974';
export function Component14974({ value = 14974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14974, 'data-value': derived.doubled }, children);
}
export default Component14974;
