import React from 'react';
const LABEL_270 = 'component_270';
export function Component270({ value = 270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_270, 'data-value': derived.doubled }, children);
}
export default Component270;
