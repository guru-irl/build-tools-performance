import React from 'react';
const LABEL_18212 = 'component_18212';
export function Component18212({ value = 18212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18212, 'data-value': derived.doubled }, children);
}
export default Component18212;
