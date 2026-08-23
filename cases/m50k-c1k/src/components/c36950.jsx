import React from 'react';
const LABEL_36950 = 'component_36950';
export function Component36950({ value = 36950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36950, 'data-value': derived.doubled }, children);
}
export default Component36950;
