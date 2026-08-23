import React from 'react';
const LABEL_15699 = 'component_15699';
export function Component15699({ value = 15699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15699, 'data-value': derived.doubled }, children);
}
export default Component15699;
