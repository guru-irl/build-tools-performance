import React from 'react';
const LABEL_202 = 'component_202';
export function Component202({ value = 202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_202, 'data-value': derived.doubled }, children);
}
export default Component202;
