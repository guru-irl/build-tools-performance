import React from 'react';
const LABEL_4386 = 'component_4386';
export function Component4386({ value = 4386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4386, 'data-value': derived.doubled }, children);
}
export default Component4386;
