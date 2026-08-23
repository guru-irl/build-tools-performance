import React from 'react';
const LABEL_31743 = 'component_31743';
export function Component31743({ value = 31743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31743, 'data-value': derived.doubled }, children);
}
export default Component31743;
