import React from 'react';
const LABEL_7900 = 'component_7900';
export function Component7900({ value = 7900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7900, 'data-value': derived.doubled }, children);
}
export default Component7900;
