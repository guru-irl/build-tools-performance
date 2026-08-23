import React from 'react';
const LABEL_24286 = 'component_24286';
export function Component24286({ value = 24286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24286, 'data-value': derived.doubled }, children);
}
export default Component24286;
