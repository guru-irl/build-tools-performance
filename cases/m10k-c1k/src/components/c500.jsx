import React from 'react';
const LABEL_500 = 'component_500';
export function Component500({ value = 500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_500, 'data-value': derived.doubled }, children);
}
export default Component500;
