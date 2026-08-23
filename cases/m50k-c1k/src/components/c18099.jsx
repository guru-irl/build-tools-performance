import React from 'react';
const LABEL_18099 = 'component_18099';
export function Component18099({ value = 18099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18099, 'data-value': derived.doubled }, children);
}
export default Component18099;
