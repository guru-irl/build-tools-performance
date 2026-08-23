import React from 'react';
const LABEL_31900 = 'component_31900';
export function Component31900({ value = 31900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31900, 'data-value': derived.doubled }, children);
}
export default Component31900;
