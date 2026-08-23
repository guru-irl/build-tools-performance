import React from 'react';
const LABEL_6946 = 'component_6946';
export function Component6946({ value = 6946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6946, 'data-value': derived.doubled }, children);
}
export default Component6946;
