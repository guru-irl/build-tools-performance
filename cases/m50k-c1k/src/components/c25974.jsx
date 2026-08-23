import React from 'react';
const LABEL_25974 = 'component_25974';
export function Component25974({ value = 25974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25974, 'data-value': derived.doubled }, children);
}
export default Component25974;
