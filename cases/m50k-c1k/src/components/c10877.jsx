import React from 'react';
const LABEL_10877 = 'component_10877';
export function Component10877({ value = 10877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10877, 'data-value': derived.doubled }, children);
}
export default Component10877;
