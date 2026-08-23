import React from 'react';
const LABEL_4651 = 'component_4651';
export function Component4651({ value = 4651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4651, 'data-value': derived.doubled }, children);
}
export default Component4651;
