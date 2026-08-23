import React from 'react';
const LABEL_1080 = 'component_1080';
export function Component1080({ value = 1080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1080, 'data-value': derived.doubled }, children);
}
export default Component1080;
