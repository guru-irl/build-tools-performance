import React from 'react';
const LABEL_38297 = 'component_38297';
export function Component38297({ value = 38297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38297, 'data-value': derived.doubled }, children);
}
export default Component38297;
