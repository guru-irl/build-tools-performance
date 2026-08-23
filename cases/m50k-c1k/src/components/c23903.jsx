import React from 'react';
const LABEL_23903 = 'component_23903';
export function Component23903({ value = 23903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23903, 'data-value': derived.doubled }, children);
}
export default Component23903;
