import React from 'react';
const LABEL_35331 = 'component_35331';
export function Component35331({ value = 35331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35331, 'data-value': derived.doubled }, children);
}
export default Component35331;
