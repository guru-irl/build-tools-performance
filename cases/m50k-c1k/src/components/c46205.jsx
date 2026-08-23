import React from 'react';
const LABEL_46205 = 'component_46205';
export function Component46205({ value = 46205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46205, 'data-value': derived.doubled }, children);
}
export default Component46205;
