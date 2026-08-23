import React from 'react';
const LABEL_5805 = 'component_5805';
export function Component5805({ value = 5805, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5805, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5805, 'data-value': derived.doubled }, children);
}
export default Component5805;
