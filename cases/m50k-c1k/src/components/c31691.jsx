import React from 'react';
const LABEL_31691 = 'component_31691';
export function Component31691({ value = 31691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31691, 'data-value': derived.doubled }, children);
}
export default Component31691;
