import React from 'react';
const LABEL_40349 = 'component_40349';
export function Component40349({ value = 40349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40349, 'data-value': derived.doubled }, children);
}
export default Component40349;
