import React from 'react';
const LABEL_35897 = 'component_35897';
export function Component35897({ value = 35897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35897, 'data-value': derived.doubled }, children);
}
export default Component35897;
