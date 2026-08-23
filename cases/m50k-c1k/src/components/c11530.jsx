import React from 'react';
const LABEL_11530 = 'component_11530';
export function Component11530({ value = 11530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11530, 'data-value': derived.doubled }, children);
}
export default Component11530;
