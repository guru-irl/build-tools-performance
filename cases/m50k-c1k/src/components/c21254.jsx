import React from 'react';
const LABEL_21254 = 'component_21254';
export function Component21254({ value = 21254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21254, 'data-value': derived.doubled }, children);
}
export default Component21254;
