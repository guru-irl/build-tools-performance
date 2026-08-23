import React from 'react';
const LABEL_24530 = 'component_24530';
export function Component24530({ value = 24530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24530, 'data-value': derived.doubled }, children);
}
export default Component24530;
