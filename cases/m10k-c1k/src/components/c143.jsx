import React from 'react';
const LABEL_143 = 'component_143';
export function Component143({ value = 143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_143, 'data-value': derived.doubled }, children);
}
export default Component143;
