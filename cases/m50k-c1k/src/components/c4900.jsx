import React from 'react';
const LABEL_4900 = 'component_4900';
export function Component4900({ value = 4900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4900, 'data-value': derived.doubled }, children);
}
export default Component4900;
