import React from 'react';
const LABEL_7429 = 'component_7429';
export function Component7429({ value = 7429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7429, 'data-value': derived.doubled }, children);
}
export default Component7429;
