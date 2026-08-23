import React from 'react';
const LABEL_29245 = 'component_29245';
export function Component29245({ value = 29245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29245, 'data-value': derived.doubled }, children);
}
export default Component29245;
