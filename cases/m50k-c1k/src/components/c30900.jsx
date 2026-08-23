import React from 'react';
const LABEL_30900 = 'component_30900';
export function Component30900({ value = 30900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30900, 'data-value': derived.doubled }, children);
}
export default Component30900;
