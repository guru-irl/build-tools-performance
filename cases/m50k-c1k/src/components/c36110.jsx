import React from 'react';
const LABEL_36110 = 'component_36110';
export function Component36110({ value = 36110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36110, 'data-value': derived.doubled }, children);
}
export default Component36110;
