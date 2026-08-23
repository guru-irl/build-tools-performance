import React from 'react';
const LABEL_8668 = 'component_8668';
export function Component8668({ value = 8668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8668, 'data-value': derived.doubled }, children);
}
export default Component8668;
