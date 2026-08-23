import React from 'react';
const LABEL_37198 = 'component_37198';
export function Component37198({ value = 37198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37198, 'data-value': derived.doubled }, children);
}
export default Component37198;
