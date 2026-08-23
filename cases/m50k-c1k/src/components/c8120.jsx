import React from 'react';
const LABEL_8120 = 'component_8120';
export function Component8120({ value = 8120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8120, 'data-value': derived.doubled }, children);
}
export default Component8120;
