import React from 'react';
const LABEL_34386 = 'component_34386';
export function Component34386({ value = 34386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34386, 'data-value': derived.doubled }, children);
}
export default Component34386;
