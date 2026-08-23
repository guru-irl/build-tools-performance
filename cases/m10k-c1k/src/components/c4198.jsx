import React from 'react';
const LABEL_4198 = 'component_4198';
export function Component4198({ value = 4198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4198, 'data-value': derived.doubled }, children);
}
export default Component4198;
