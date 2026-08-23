import React from 'react';
const LABEL_8332 = 'component_8332';
export function Component8332({ value = 8332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8332, 'data-value': derived.doubled }, children);
}
export default Component8332;
