import React from 'react';
const LABEL_41092 = 'component_41092';
export function Component41092({ value = 41092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41092, 'data-value': derived.doubled }, children);
}
export default Component41092;
