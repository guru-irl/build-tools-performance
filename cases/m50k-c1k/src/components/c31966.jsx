import React from 'react';
const LABEL_31966 = 'component_31966';
export function Component31966({ value = 31966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31966, 'data-value': derived.doubled }, children);
}
export default Component31966;
