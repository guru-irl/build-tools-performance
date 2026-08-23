import React from 'react';
const LABEL_34946 = 'component_34946';
export function Component34946({ value = 34946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34946, 'data-value': derived.doubled }, children);
}
export default Component34946;
