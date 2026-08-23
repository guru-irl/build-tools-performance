import React from 'react';
const LABEL_46386 = 'component_46386';
export function Component46386({ value = 46386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46386, 'data-value': derived.doubled }, children);
}
export default Component46386;
