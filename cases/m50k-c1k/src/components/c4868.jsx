import React from 'react';
const LABEL_4868 = 'component_4868';
export function Component4868({ value = 4868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4868, 'data-value': derived.doubled }, children);
}
export default Component4868;
