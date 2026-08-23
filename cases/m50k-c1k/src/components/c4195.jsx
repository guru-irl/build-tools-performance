import React from 'react';
const LABEL_4195 = 'component_4195';
export function Component4195({ value = 4195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4195, 'data-value': derived.doubled }, children);
}
export default Component4195;
