import React from 'react';
const LABEL_344 = 'component_344';
export function Component344({ value = 344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_344, 'data-value': derived.doubled }, children);
}
export default Component344;
