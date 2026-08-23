import React from 'react';
const LABEL_15579 = 'component_15579';
export function Component15579({ value = 15579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15579, 'data-value': derived.doubled }, children);
}
export default Component15579;
