import React from 'react';
const LABEL_10349 = 'component_10349';
export function Component10349({ value = 10349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10349, 'data-value': derived.doubled }, children);
}
export default Component10349;
