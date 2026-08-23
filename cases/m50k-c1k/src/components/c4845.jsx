import React from 'react';
const LABEL_4845 = 'component_4845';
export function Component4845({ value = 4845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4845, 'data-value': derived.doubled }, children);
}
export default Component4845;
