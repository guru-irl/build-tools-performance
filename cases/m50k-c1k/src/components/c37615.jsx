import React from 'react';
const LABEL_37615 = 'component_37615';
export function Component37615({ value = 37615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37615, 'data-value': derived.doubled }, children);
}
export default Component37615;
