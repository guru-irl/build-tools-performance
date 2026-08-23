import React from 'react';
const LABEL_42210 = 'component_42210';
export function Component42210({ value = 42210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42210, 'data-value': derived.doubled }, children);
}
export default Component42210;
