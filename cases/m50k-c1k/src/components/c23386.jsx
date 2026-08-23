import React from 'react';
const LABEL_23386 = 'component_23386';
export function Component23386({ value = 23386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23386, 'data-value': derived.doubled }, children);
}
export default Component23386;
