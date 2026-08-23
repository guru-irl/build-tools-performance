import React from 'react';
const LABEL_46764 = 'component_46764';
export function Component46764({ value = 46764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46764, 'data-value': derived.doubled }, children);
}
export default Component46764;
