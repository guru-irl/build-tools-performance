import React from 'react';
const LABEL_8622 = 'component_8622';
export function Component8622({ value = 8622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8622, 'data-value': derived.doubled }, children);
}
export default Component8622;
