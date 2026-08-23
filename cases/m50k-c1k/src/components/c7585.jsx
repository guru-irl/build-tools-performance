import React from 'react';
const LABEL_7585 = 'component_7585';
export function Component7585({ value = 7585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7585, 'data-value': derived.doubled }, children);
}
export default Component7585;
