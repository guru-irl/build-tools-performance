import React from 'react';
const LABEL_42190 = 'component_42190';
export function Component42190({ value = 42190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42190, 'data-value': derived.doubled }, children);
}
export default Component42190;
