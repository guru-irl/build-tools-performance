import React from 'react';
const LABEL_31367 = 'component_31367';
export function Component31367({ value = 31367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31367, 'data-value': derived.doubled }, children);
}
export default Component31367;
