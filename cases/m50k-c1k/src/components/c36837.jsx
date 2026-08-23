import React from 'react';
const LABEL_36837 = 'component_36837';
export function Component36837({ value = 36837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36837, 'data-value': derived.doubled }, children);
}
export default Component36837;
