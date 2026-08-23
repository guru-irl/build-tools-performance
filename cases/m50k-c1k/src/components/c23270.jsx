import React from 'react';
const LABEL_23270 = 'component_23270';
export function Component23270({ value = 23270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23270, 'data-value': derived.doubled }, children);
}
export default Component23270;
