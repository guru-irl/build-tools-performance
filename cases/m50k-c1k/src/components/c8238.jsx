import React from 'react';
const LABEL_8238 = 'component_8238';
export function Component8238({ value = 8238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8238, 'data-value': derived.doubled }, children);
}
export default Component8238;
