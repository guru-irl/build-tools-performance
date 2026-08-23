import React from 'react';
const LABEL_37286 = 'component_37286';
export function Component37286({ value = 37286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37286, 'data-value': derived.doubled }, children);
}
export default Component37286;
