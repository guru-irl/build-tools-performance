import React from 'react';
const LABEL_13983 = 'component_13983';
export function Component13983({ value = 13983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13983, 'data-value': derived.doubled }, children);
}
export default Component13983;
