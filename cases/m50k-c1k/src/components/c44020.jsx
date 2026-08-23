import React from 'react';
const LABEL_44020 = 'component_44020';
export function Component44020({ value = 44020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44020, 'data-value': derived.doubled }, children);
}
export default Component44020;
