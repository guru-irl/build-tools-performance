import React from 'react';
const LABEL_35057 = 'component_35057';
export function Component35057({ value = 35057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35057, 'data-value': derived.doubled }, children);
}
export default Component35057;
