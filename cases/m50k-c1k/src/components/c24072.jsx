import React from 'react';
const LABEL_24072 = 'component_24072';
export function Component24072({ value = 24072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24072, 'data-value': derived.doubled }, children);
}
export default Component24072;
