import React from 'react';
const LABEL_14317 = 'component_14317';
export function Component14317({ value = 14317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14317, 'data-value': derived.doubled }, children);
}
export default Component14317;
