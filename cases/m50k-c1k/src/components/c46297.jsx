import React from 'react';
const LABEL_46297 = 'component_46297';
export function Component46297({ value = 46297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46297, 'data-value': derived.doubled }, children);
}
export default Component46297;
