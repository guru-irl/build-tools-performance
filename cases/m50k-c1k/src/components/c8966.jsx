import React from 'react';
const LABEL_8966 = 'component_8966';
export function Component8966({ value = 8966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8966, 'data-value': derived.doubled }, children);
}
export default Component8966;
