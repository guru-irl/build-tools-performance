import React from 'react';
const LABEL_31953 = 'component_31953';
export function Component31953({ value = 31953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31953, 'data-value': derived.doubled }, children);
}
export default Component31953;
