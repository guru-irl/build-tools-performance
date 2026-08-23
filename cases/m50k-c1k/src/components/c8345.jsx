import React from 'react';
const LABEL_8345 = 'component_8345';
export function Component8345({ value = 8345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8345, 'data-value': derived.doubled }, children);
}
export default Component8345;
