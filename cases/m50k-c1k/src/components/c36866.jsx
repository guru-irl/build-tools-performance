import React from 'react';
const LABEL_36866 = 'component_36866';
export function Component36866({ value = 36866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36866, 'data-value': derived.doubled }, children);
}
export default Component36866;
