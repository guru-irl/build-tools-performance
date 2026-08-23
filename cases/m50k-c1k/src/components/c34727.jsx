import React from 'react';
const LABEL_34727 = 'component_34727';
export function Component34727({ value = 34727, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34727, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34727, 'data-value': derived.doubled }, children);
}
export default Component34727;
