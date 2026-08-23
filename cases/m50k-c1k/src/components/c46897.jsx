import React from 'react';
const LABEL_46897 = 'component_46897';
export function Component46897({ value = 46897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46897, 'data-value': derived.doubled }, children);
}
export default Component46897;
