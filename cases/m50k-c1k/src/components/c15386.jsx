import React from 'react';
const LABEL_15386 = 'component_15386';
export function Component15386({ value = 15386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15386, 'data-value': derived.doubled }, children);
}
export default Component15386;
