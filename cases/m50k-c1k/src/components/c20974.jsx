import React from 'react';
const LABEL_20974 = 'component_20974';
export function Component20974({ value = 20974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20974, 'data-value': derived.doubled }, children);
}
export default Component20974;
