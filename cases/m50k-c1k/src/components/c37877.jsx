import React from 'react';
const LABEL_37877 = 'component_37877';
export function Component37877({ value = 37877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37877, 'data-value': derived.doubled }, children);
}
export default Component37877;
