import React from 'react';
const LABEL_19989 = 'component_19989';
export function Component19989({ value = 19989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19989, 'data-value': derived.doubled }, children);
}
export default Component19989;
