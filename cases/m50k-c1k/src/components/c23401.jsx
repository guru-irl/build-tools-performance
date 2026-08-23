import React from 'react';
const LABEL_23401 = 'component_23401';
export function Component23401({ value = 23401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23401, 'data-value': derived.doubled }, children);
}
export default Component23401;
