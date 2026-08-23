import React from 'react';
const LABEL_12364 = 'component_12364';
export function Component12364({ value = 12364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12364, 'data-value': derived.doubled }, children);
}
export default Component12364;
