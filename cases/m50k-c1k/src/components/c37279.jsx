import React from 'react';
const LABEL_37279 = 'component_37279';
export function Component37279({ value = 37279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37279, 'data-value': derived.doubled }, children);
}
export default Component37279;
