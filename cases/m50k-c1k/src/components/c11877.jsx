import React from 'react';
const LABEL_11877 = 'component_11877';
export function Component11877({ value = 11877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11877, 'data-value': derived.doubled }, children);
}
export default Component11877;
