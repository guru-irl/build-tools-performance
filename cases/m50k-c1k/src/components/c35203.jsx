import React from 'react';
const LABEL_35203 = 'component_35203';
export function Component35203({ value = 35203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35203, 'data-value': derived.doubled }, children);
}
export default Component35203;
