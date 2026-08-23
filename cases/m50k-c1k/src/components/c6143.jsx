import React from 'react';
const LABEL_6143 = 'component_6143';
export function Component6143({ value = 6143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6143, 'data-value': derived.doubled }, children);
}
export default Component6143;
