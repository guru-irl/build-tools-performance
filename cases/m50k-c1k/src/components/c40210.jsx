import React from 'react';
const LABEL_40210 = 'component_40210';
export function Component40210({ value = 40210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40210, 'data-value': derived.doubled }, children);
}
export default Component40210;
