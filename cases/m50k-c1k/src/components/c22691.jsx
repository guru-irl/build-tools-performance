import React from 'react';
const LABEL_22691 = 'component_22691';
export function Component22691({ value = 22691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22691, 'data-value': derived.doubled }, children);
}
export default Component22691;
