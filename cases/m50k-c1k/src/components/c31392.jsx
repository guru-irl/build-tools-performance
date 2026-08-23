import React from 'react';
const LABEL_31392 = 'component_31392';
export function Component31392({ value = 31392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31392, 'data-value': derived.doubled }, children);
}
export default Component31392;
