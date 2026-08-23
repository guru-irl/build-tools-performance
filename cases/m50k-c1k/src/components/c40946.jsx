import React from 'react';
const LABEL_40946 = 'component_40946';
export function Component40946({ value = 40946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40946, 'data-value': derived.doubled }, children);
}
export default Component40946;
