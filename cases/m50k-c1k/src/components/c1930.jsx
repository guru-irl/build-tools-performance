import React from 'react';
const LABEL_1930 = 'component_1930';
export function Component1930({ value = 1930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1930, 'data-value': derived.doubled }, children);
}
export default Component1930;
