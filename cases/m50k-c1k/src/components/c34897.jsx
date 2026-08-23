import React from 'react';
const LABEL_34897 = 'component_34897';
export function Component34897({ value = 34897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34897, 'data-value': derived.doubled }, children);
}
export default Component34897;
