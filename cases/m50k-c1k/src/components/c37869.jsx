import React from 'react';
const LABEL_37869 = 'component_37869';
export function Component37869({ value = 37869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37869, 'data-value': derived.doubled }, children);
}
export default Component37869;
