import React from 'react';
const LABEL_34771 = 'component_34771';
export function Component34771({ value = 34771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34771, 'data-value': derived.doubled }, children);
}
export default Component34771;
