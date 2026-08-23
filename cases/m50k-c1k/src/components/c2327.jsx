import React from 'react';
const LABEL_2327 = 'component_2327';
export function Component2327({ value = 2327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2327, 'data-value': derived.doubled }, children);
}
export default Component2327;
