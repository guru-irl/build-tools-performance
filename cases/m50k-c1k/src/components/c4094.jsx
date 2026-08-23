import React from 'react';
const LABEL_4094 = 'component_4094';
export function Component4094({ value = 4094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4094, 'data-value': derived.doubled }, children);
}
export default Component4094;
