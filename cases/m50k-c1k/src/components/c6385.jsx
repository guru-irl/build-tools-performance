import React from 'react';
const LABEL_6385 = 'component_6385';
export function Component6385({ value = 6385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6385, 'data-value': derived.doubled }, children);
}
export default Component6385;
