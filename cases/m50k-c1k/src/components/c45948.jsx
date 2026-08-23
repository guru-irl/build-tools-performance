import React from 'react';
const LABEL_45948 = 'component_45948';
export function Component45948({ value = 45948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45948, 'data-value': derived.doubled }, children);
}
export default Component45948;
