import React from 'react';
const LABEL_46530 = 'component_46530';
export function Component46530({ value = 46530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46530, 'data-value': derived.doubled }, children);
}
export default Component46530;
