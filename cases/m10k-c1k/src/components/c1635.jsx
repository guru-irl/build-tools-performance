import React from 'react';
const LABEL_1635 = 'component_1635';
export function Component1635({ value = 1635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1635, 'data-value': derived.doubled }, children);
}
export default Component1635;
