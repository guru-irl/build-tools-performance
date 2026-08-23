import React from 'react';
const LABEL_6581 = 'component_6581';
export function Component6581({ value = 6581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6581, 'data-value': derived.doubled }, children);
}
export default Component6581;
