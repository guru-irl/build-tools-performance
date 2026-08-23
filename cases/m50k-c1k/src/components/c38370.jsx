import React from 'react';
const LABEL_38370 = 'component_38370';
export function Component38370({ value = 38370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38370, 'data-value': derived.doubled }, children);
}
export default Component38370;
