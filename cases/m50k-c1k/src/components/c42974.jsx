import React from 'react';
const LABEL_42974 = 'component_42974';
export function Component42974({ value = 42974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42974, 'data-value': derived.doubled }, children);
}
export default Component42974;
