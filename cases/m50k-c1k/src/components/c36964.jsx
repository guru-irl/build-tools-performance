import React from 'react';
const LABEL_36964 = 'component_36964';
export function Component36964({ value = 36964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36964, 'data-value': derived.doubled }, children);
}
export default Component36964;
