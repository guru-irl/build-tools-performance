import React from 'react';
const LABEL_42591 = 'component_42591';
export function Component42591({ value = 42591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42591, 'data-value': derived.doubled }, children);
}
export default Component42591;
