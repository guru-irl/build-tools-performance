import React from 'react';
const LABEL_19530 = 'component_19530';
export function Component19530({ value = 19530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19530, 'data-value': derived.doubled }, children);
}
export default Component19530;
