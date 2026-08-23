import React from 'react';
const LABEL_29286 = 'component_29286';
export function Component29286({ value = 29286, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29286, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29286, 'data-value': derived.doubled }, children);
}
export default Component29286;
