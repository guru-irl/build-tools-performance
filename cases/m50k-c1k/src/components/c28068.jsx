import React from 'react';
const LABEL_28068 = 'component_28068';
export function Component28068({ value = 28068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28068, 'data-value': derived.doubled }, children);
}
export default Component28068;
