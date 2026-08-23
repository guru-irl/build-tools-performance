import React from 'react';
const LABEL_16386 = 'component_16386';
export function Component16386({ value = 16386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16386, 'data-value': derived.doubled }, children);
}
export default Component16386;
