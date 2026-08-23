import React from 'react';
const LABEL_18349 = 'component_18349';
export function Component18349({ value = 18349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18349, 'data-value': derived.doubled }, children);
}
export default Component18349;
