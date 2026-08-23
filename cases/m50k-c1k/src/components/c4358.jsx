import React from 'react';
const LABEL_4358 = 'component_4358';
export function Component4358({ value = 4358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4358, 'data-value': derived.doubled }, children);
}
export default Component4358;
