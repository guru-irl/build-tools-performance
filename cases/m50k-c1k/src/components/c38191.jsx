import React from 'react';
const LABEL_38191 = 'component_38191';
export function Component38191({ value = 38191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38191, 'data-value': derived.doubled }, children);
}
export default Component38191;
