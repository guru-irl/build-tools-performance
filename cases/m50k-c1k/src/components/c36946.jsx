import React from 'react';
const LABEL_36946 = 'component_36946';
export function Component36946({ value = 36946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36946, 'data-value': derived.doubled }, children);
}
export default Component36946;
