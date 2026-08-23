import React from 'react';
const LABEL_37586 = 'component_37586';
export function Component37586({ value = 37586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37586, 'data-value': derived.doubled }, children);
}
export default Component37586;
