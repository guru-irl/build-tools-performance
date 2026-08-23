import React from 'react';
const LABEL_34912 = 'component_34912';
export function Component34912({ value = 34912, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34912, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34912, 'data-value': derived.doubled }, children);
}
export default Component34912;
