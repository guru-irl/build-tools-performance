import React from 'react';
const LABEL_8449 = 'component_8449';
export function Component8449({ value = 8449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8449, 'data-value': derived.doubled }, children);
}
export default Component8449;
