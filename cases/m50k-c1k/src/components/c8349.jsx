import React from 'react';
const LABEL_8349 = 'component_8349';
export function Component8349({ value = 8349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8349, 'data-value': derived.doubled }, children);
}
export default Component8349;
