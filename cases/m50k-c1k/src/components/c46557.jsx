import React from 'react';
const LABEL_46557 = 'component_46557';
export function Component46557({ value = 46557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46557, 'data-value': derived.doubled }, children);
}
export default Component46557;
