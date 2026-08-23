import React from 'react';
const LABEL_5094 = 'component_5094';
export function Component5094({ value = 5094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5094, 'data-value': derived.doubled }, children);
}
export default Component5094;
