import React from 'react';
const LABEL_36406 = 'component_36406';
export function Component36406({ value = 36406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36406, 'data-value': derived.doubled }, children);
}
export default Component36406;
