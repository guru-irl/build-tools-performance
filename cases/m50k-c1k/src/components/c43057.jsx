import React from 'react';
const LABEL_43057 = 'component_43057';
export function Component43057({ value = 43057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43057, 'data-value': derived.doubled }, children);
}
export default Component43057;
