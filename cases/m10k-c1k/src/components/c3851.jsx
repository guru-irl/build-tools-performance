import React from 'react';
const LABEL_3851 = 'component_3851';
export function Component3851({ value = 3851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3851, 'data-value': derived.doubled }, children);
}
export default Component3851;
