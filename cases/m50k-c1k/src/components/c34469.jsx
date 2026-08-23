import React from 'react';
const LABEL_34469 = 'component_34469';
export function Component34469({ value = 34469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34469, 'data-value': derived.doubled }, children);
}
export default Component34469;
