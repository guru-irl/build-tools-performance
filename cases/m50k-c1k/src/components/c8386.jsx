import React from 'react';
const LABEL_8386 = 'component_8386';
export function Component8386({ value = 8386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8386, 'data-value': derived.doubled }, children);
}
export default Component8386;
