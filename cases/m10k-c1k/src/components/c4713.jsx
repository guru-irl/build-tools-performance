import React from 'react';
const LABEL_4713 = 'component_4713';
export function Component4713({ value = 4713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4713, 'data-value': derived.doubled }, children);
}
export default Component4713;
