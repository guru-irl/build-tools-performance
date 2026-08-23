import React from 'react';
const LABEL_46548 = 'component_46548';
export function Component46548({ value = 46548, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46548, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46548, 'data-value': derived.doubled }, children);
}
export default Component46548;
