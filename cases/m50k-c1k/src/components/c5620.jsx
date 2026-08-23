import React from 'react';
const LABEL_5620 = 'component_5620';
export function Component5620({ value = 5620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5620, 'data-value': derived.doubled }, children);
}
export default Component5620;
