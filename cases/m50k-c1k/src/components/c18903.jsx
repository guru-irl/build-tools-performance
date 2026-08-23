import React from 'react';
const LABEL_18903 = 'component_18903';
export function Component18903({ value = 18903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18903, 'data-value': derived.doubled }, children);
}
export default Component18903;
