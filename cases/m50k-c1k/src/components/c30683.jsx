import React from 'react';
const LABEL_30683 = 'component_30683';
export function Component30683({ value = 30683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30683, 'data-value': derived.doubled }, children);
}
export default Component30683;
