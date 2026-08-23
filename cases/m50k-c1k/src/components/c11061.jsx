import React from 'react';
const LABEL_11061 = 'component_11061';
export function Component11061({ value = 11061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11061, 'data-value': derived.doubled }, children);
}
export default Component11061;
