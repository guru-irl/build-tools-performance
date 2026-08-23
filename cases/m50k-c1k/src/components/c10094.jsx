import React from 'react';
const LABEL_10094 = 'component_10094';
export function Component10094({ value = 10094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10094, 'data-value': derived.doubled }, children);
}
export default Component10094;
