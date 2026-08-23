import React from 'react';
const LABEL_713 = 'component_713';
export function Component713({ value = 713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_713, 'data-value': derived.doubled }, children);
}
export default Component713;
