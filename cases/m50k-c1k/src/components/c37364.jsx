import React from 'react';
const LABEL_37364 = 'component_37364';
export function Component37364({ value = 37364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37364, 'data-value': derived.doubled }, children);
}
export default Component37364;
