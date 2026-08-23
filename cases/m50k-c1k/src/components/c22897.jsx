import React from 'react';
const LABEL_22897 = 'component_22897';
export function Component22897({ value = 22897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22897, 'data-value': derived.doubled }, children);
}
export default Component22897;
