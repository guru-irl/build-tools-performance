import React from 'react';
const LABEL_34825 = 'component_34825';
export function Component34825({ value = 34825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34825, 'data-value': derived.doubled }, children);
}
export default Component34825;
