import React from 'react';
const LABEL_38364 = 'component_38364';
export function Component38364({ value = 38364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38364, 'data-value': derived.doubled }, children);
}
export default Component38364;
