import React from 'react';
const LABEL_46737 = 'component_46737';
export function Component46737({ value = 46737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46737, 'data-value': derived.doubled }, children);
}
export default Component46737;
