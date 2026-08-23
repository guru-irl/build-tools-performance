import React from 'react';
const LABEL_41855 = 'component_41855';
export function Component41855({ value = 41855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41855, 'data-value': derived.doubled }, children);
}
export default Component41855;
