import React from 'react';
const LABEL_8903 = 'component_8903';
export function Component8903({ value = 8903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8903, 'data-value': derived.doubled }, children);
}
export default Component8903;
