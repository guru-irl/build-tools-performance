import React from 'react';
const LABEL_635 = 'component_635';
export function Component635({ value = 635, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_635, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_635, 'data-value': derived.doubled }, children);
}
export default Component635;
