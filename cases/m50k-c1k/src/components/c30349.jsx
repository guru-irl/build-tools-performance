import React from 'react';
const LABEL_30349 = 'component_30349';
export function Component30349({ value = 30349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30349, 'data-value': derived.doubled }, children);
}
export default Component30349;
