import React from 'react';
const LABEL_35730 = 'component_35730';
export function Component35730({ value = 35730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35730, 'data-value': derived.doubled }, children);
}
export default Component35730;
