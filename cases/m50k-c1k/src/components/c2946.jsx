import React from 'react';
const LABEL_2946 = 'component_2946';
export function Component2946({ value = 2946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2946, 'data-value': derived.doubled }, children);
}
export default Component2946;
