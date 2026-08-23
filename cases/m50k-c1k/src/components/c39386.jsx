import React from 'react';
const LABEL_39386 = 'component_39386';
export function Component39386({ value = 39386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39386, 'data-value': derived.doubled }, children);
}
export default Component39386;
