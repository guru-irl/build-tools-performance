import React from 'react';
const LABEL_8713 = 'component_8713';
export function Component8713({ value = 8713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8713, 'data-value': derived.doubled }, children);
}
export default Component8713;
