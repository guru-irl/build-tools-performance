import React from 'react';
const LABEL_4530 = 'component_4530';
export function Component4530({ value = 4530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4530, 'data-value': derived.doubled }, children);
}
export default Component4530;
