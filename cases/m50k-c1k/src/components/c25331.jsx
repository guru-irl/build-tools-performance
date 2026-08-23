import React from 'react';
const LABEL_25331 = 'component_25331';
export function Component25331({ value = 25331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25331, 'data-value': derived.doubled }, children);
}
export default Component25331;
