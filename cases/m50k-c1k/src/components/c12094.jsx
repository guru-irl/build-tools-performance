import React from 'react';
const LABEL_12094 = 'component_12094';
export function Component12094({ value = 12094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12094, 'data-value': derived.doubled }, children);
}
export default Component12094;
