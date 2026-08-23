import React from 'react';
const LABEL_8302 = 'component_8302';
export function Component8302({ value = 8302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8302, 'data-value': derived.doubled }, children);
}
export default Component8302;
