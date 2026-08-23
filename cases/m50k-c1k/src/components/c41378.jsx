import React from 'react';
const LABEL_41378 = 'component_41378';
export function Component41378({ value = 41378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41378, 'data-value': derived.doubled }, children);
}
export default Component41378;
