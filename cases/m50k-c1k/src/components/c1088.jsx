import React from 'react';
const LABEL_1088 = 'component_1088';
export function Component1088({ value = 1088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1088, 'data-value': derived.doubled }, children);
}
export default Component1088;
