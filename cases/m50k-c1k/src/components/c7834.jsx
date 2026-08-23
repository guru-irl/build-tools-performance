import React from 'react';
const LABEL_7834 = 'component_7834';
export function Component7834({ value = 7834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7834, 'data-value': derived.doubled }, children);
}
export default Component7834;
