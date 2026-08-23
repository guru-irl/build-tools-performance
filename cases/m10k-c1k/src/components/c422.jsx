import React from 'react';
const LABEL_422 = 'component_422';
export function Component422({ value = 422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_422, 'data-value': derived.doubled }, children);
}
export default Component422;
