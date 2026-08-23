import React from 'react';
const LABEL_1094 = 'component_1094';
export function Component1094({ value = 1094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1094, 'data-value': derived.doubled }, children);
}
export default Component1094;
