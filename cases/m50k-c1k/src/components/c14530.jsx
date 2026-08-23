import React from 'react';
const LABEL_14530 = 'component_14530';
export function Component14530({ value = 14530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14530, 'data-value': derived.doubled }, children);
}
export default Component14530;
