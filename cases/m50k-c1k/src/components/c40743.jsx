import React from 'react';
const LABEL_40743 = 'component_40743';
export function Component40743({ value = 40743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40743, 'data-value': derived.doubled }, children);
}
export default Component40743;
