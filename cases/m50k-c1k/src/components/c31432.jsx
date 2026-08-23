import React from 'react';
const LABEL_31432 = 'component_31432';
export function Component31432({ value = 31432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31432, 'data-value': derived.doubled }, children);
}
export default Component31432;
