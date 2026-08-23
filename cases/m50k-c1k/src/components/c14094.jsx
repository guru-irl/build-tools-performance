import React from 'react';
const LABEL_14094 = 'component_14094';
export function Component14094({ value = 14094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14094, 'data-value': derived.doubled }, children);
}
export default Component14094;
