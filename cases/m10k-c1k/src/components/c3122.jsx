import React from 'react';
const LABEL_3122 = 'component_3122';
export function Component3122({ value = 3122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3122, 'data-value': derived.doubled }, children);
}
export default Component3122;
