import React from 'react';
const LABEL_5897 = 'component_5897';
export function Component5897({ value = 5897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5897, 'data-value': derived.doubled }, children);
}
export default Component5897;
