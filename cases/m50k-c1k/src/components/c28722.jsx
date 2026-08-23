import React from 'react';
const LABEL_28722 = 'component_28722';
export function Component28722({ value = 28722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28722, 'data-value': derived.doubled }, children);
}
export default Component28722;
