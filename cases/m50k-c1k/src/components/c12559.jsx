import React from 'react';
const LABEL_12559 = 'component_12559';
export function Component12559({ value = 12559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12559, 'data-value': derived.doubled }, children);
}
export default Component12559;
