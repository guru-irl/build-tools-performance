import React from 'react';
const LABEL_38877 = 'component_38877';
export function Component38877({ value = 38877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38877, 'data-value': derived.doubled }, children);
}
export default Component38877;
