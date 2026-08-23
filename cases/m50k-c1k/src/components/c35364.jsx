import React from 'react';
const LABEL_35364 = 'component_35364';
export function Component35364({ value = 35364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35364, 'data-value': derived.doubled }, children);
}
export default Component35364;
