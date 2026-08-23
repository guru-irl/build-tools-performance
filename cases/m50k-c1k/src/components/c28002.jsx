import React from 'react';
const LABEL_28002 = 'component_28002';
export function Component28002({ value = 28002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28002, 'data-value': derived.doubled }, children);
}
export default Component28002;
