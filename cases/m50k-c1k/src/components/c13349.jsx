import React from 'react';
const LABEL_13349 = 'component_13349';
export function Component13349({ value = 13349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13349, 'data-value': derived.doubled }, children);
}
export default Component13349;
