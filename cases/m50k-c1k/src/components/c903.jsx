import React from 'react';
const LABEL_903 = 'component_903';
export function Component903({ value = 903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_903, 'data-value': derived.doubled }, children);
}
export default Component903;
