import React from 'react';
const LABEL_41103 = 'component_41103';
export function Component41103({ value = 41103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41103, 'data-value': derived.doubled }, children);
}
export default Component41103;
