import React from 'react';
const LABEL_44286 = 'component_44286';
export function Component44286({ value = 44286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44286, 'data-value': derived.doubled }, children);
}
export default Component44286;
