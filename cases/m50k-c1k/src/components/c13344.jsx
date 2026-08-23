import React from 'react';
const LABEL_13344 = 'component_13344';
export function Component13344({ value = 13344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13344, 'data-value': derived.doubled }, children);
}
export default Component13344;
