import React from 'react';
const LABEL_20094 = 'component_20094';
export function Component20094({ value = 20094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20094, 'data-value': derived.doubled }, children);
}
export default Component20094;
