import React from 'react';
const LABEL_2286 = 'component_2286';
export function Component2286({ value = 2286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2286, 'data-value': derived.doubled }, children);
}
export default Component2286;
