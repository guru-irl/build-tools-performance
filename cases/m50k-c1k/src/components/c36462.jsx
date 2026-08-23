import React from 'react';
const LABEL_36462 = 'component_36462';
export function Component36462({ value = 36462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36462, 'data-value': derived.doubled }, children);
}
export default Component36462;
