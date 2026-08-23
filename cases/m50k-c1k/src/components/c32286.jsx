import React from 'react';
const LABEL_32286 = 'component_32286';
export function Component32286({ value = 32286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32286, 'data-value': derived.doubled }, children);
}
export default Component32286;
