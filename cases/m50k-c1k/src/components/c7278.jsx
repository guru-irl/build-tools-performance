import React from 'react';
const LABEL_7278 = 'component_7278';
export function Component7278({ value = 7278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7278, 'data-value': derived.doubled }, children);
}
export default Component7278;
