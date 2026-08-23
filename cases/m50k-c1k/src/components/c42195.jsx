import React from 'react';
const LABEL_42195 = 'component_42195';
export function Component42195({ value = 42195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42195, 'data-value': derived.doubled }, children);
}
export default Component42195;
