import React from 'react';
const LABEL_8969 = 'component_8969';
export function Component8969({ value = 8969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8969, 'data-value': derived.doubled }, children);
}
export default Component8969;
