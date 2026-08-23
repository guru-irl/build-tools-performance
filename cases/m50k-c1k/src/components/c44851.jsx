import React from 'react';
const LABEL_44851 = 'component_44851';
export function Component44851({ value = 44851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44851, 'data-value': derived.doubled }, children);
}
export default Component44851;
