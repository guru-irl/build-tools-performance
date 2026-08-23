import React from 'react';
const LABEL_5530 = 'component_5530';
export function Component5530({ value = 5530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5530, 'data-value': derived.doubled }, children);
}
export default Component5530;
