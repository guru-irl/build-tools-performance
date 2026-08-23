import React from 'react';
const LABEL_39094 = 'component_39094';
export function Component39094({ value = 39094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39094, 'data-value': derived.doubled }, children);
}
export default Component39094;
