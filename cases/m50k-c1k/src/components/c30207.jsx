import React from 'react';
const LABEL_30207 = 'component_30207';
export function Component30207({ value = 30207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30207, 'data-value': derived.doubled }, children);
}
export default Component30207;
