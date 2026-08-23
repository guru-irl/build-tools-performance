import React from 'react';
const LABEL_30286 = 'component_30286';
export function Component30286({ value = 30286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30286, 'data-value': derived.doubled }, children);
}
export default Component30286;
