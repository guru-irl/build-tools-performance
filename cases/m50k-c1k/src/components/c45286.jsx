import React from 'react';
const LABEL_45286 = 'component_45286';
export function Component45286({ value = 45286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45286, 'data-value': derived.doubled }, children);
}
export default Component45286;
