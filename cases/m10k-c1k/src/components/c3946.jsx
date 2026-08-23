import React from 'react';
const LABEL_3946 = 'component_3946';
export function Component3946({ value = 3946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3946, 'data-value': derived.doubled }, children);
}
export default Component3946;
