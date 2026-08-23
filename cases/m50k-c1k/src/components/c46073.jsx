import React from 'react';
const LABEL_46073 = 'component_46073';
export function Component46073({ value = 46073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46073, 'data-value': derived.doubled }, children);
}
export default Component46073;
