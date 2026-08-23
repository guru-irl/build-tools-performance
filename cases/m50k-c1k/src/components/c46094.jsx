import React from 'react';
const LABEL_46094 = 'component_46094';
export function Component46094({ value = 46094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46094, 'data-value': derived.doubled }, children);
}
export default Component46094;
