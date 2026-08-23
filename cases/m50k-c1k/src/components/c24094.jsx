import React from 'react';
const LABEL_24094 = 'component_24094';
export function Component24094({ value = 24094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24094, 'data-value': derived.doubled }, children);
}
export default Component24094;
