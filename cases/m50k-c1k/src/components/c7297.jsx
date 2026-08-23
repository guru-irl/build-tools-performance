import React from 'react';
const LABEL_7297 = 'component_7297';
export function Component7297({ value = 7297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7297, 'data-value': derived.doubled }, children);
}
export default Component7297;
