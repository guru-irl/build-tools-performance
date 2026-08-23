import React from 'react';
const LABEL_36094 = 'component_36094';
export function Component36094({ value = 36094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36094, 'data-value': derived.doubled }, children);
}
export default Component36094;
