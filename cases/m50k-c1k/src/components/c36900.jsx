import React from 'react';
const LABEL_36900 = 'component_36900';
export function Component36900({ value = 36900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36900, 'data-value': derived.doubled }, children);
}
export default Component36900;
