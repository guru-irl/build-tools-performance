import React from 'react';
const LABEL_37964 = 'component_37964';
export function Component37964({ value = 37964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37964, 'data-value': derived.doubled }, children);
}
export default Component37964;
