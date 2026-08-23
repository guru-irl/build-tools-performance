import React from 'react';
const LABEL_6386 = 'component_6386';
export function Component6386({ value = 6386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6386, 'data-value': derived.doubled }, children);
}
export default Component6386;
