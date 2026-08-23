import React from 'react';
const LABEL_40932 = 'component_40932';
export function Component40932({ value = 40932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40932, 'data-value': derived.doubled }, children);
}
export default Component40932;
