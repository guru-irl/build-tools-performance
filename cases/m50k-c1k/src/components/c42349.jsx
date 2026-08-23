import React from 'react';
const LABEL_42349 = 'component_42349';
export function Component42349({ value = 42349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42349, 'data-value': derived.doubled }, children);
}
export default Component42349;
