import React from 'react';
const LABEL_8946 = 'component_8946';
export function Component8946({ value = 8946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8946, 'data-value': derived.doubled }, children);
}
export default Component8946;
