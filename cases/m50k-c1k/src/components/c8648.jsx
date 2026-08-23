import React from 'react';
const LABEL_8648 = 'component_8648';
export function Component8648({ value = 8648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8648, 'data-value': derived.doubled }, children);
}
export default Component8648;
