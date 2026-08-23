import React from 'react';
const LABEL_38530 = 'component_38530';
export function Component38530({ value = 38530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38530, 'data-value': derived.doubled }, children);
}
export default Component38530;
