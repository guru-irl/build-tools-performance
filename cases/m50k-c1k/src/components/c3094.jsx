import React from 'react';
const LABEL_3094 = 'component_3094';
export function Component3094({ value = 3094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3094, 'data-value': derived.doubled }, children);
}
export default Component3094;
