import React from 'react';
const LABEL_13897 = 'component_13897';
export function Component13897({ value = 13897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13897, 'data-value': derived.doubled }, children);
}
export default Component13897;
