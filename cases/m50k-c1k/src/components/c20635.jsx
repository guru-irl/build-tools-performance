import React from 'react';
const LABEL_20635 = 'component_20635';
export function Component20635({ value = 20635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20635, 'data-value': derived.doubled }, children);
}
export default Component20635;
