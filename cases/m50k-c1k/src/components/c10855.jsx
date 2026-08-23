import React from 'react';
const LABEL_10855 = 'component_10855';
export function Component10855({ value = 10855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10855, 'data-value': derived.doubled }, children);
}
export default Component10855;
