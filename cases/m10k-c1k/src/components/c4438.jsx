import React from 'react';
const LABEL_4438 = 'component_4438';
export function Component4438({ value = 4438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4438, 'data-value': derived.doubled }, children);
}
export default Component4438;
