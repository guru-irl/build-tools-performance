import React from 'react';
const LABEL_40666 = 'component_40666';
export function Component40666({ value = 40666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40666, 'data-value': derived.doubled }, children);
}
export default Component40666;
