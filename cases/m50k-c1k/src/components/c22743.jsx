import React from 'react';
const LABEL_22743 = 'component_22743';
export function Component22743({ value = 22743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22743, 'data-value': derived.doubled }, children);
}
export default Component22743;
