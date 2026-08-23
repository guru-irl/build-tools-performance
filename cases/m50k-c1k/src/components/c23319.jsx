import React from 'react';
const LABEL_23319 = 'component_23319';
export function Component23319({ value = 23319, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23319, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23319, 'data-value': derived.doubled }, children);
}
export default Component23319;
