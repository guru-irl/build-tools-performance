import React from 'react';
const LABEL_10331 = 'component_10331';
export function Component10331({ value = 10331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10331, 'data-value': derived.doubled }, children);
}
export default Component10331;
