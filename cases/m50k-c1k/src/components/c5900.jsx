import React from 'react';
const LABEL_5900 = 'component_5900';
export function Component5900({ value = 5900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5900, 'data-value': derived.doubled }, children);
}
export default Component5900;
