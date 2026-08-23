import React from 'react';
const LABEL_26635 = 'component_26635';
export function Component26635({ value = 26635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26635, 'data-value': derived.doubled }, children);
}
export default Component26635;
