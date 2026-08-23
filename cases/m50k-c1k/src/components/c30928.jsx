import React from 'react';
const LABEL_30928 = 'component_30928';
export function Component30928({ value = 30928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30928, 'data-value': derived.doubled }, children);
}
export default Component30928;
