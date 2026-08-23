import React from 'react';
const LABEL_15635 = 'component_15635';
export function Component15635({ value = 15635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15635, 'data-value': derived.doubled }, children);
}
export default Component15635;
