import React from 'react';
const LABEL_12635 = 'component_12635';
export function Component12635({ value = 12635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12635, 'data-value': derived.doubled }, children);
}
export default Component12635;
