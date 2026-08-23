import React from 'react';
const LABEL_14900 = 'component_14900';
export function Component14900({ value = 14900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14900, 'data-value': derived.doubled }, children);
}
export default Component14900;
