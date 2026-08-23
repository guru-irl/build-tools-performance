import React from 'react';
const LABEL_33900 = 'component_33900';
export function Component33900({ value = 33900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33900, 'data-value': derived.doubled }, children);
}
export default Component33900;
