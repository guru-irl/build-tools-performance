import React from 'react';
const LABEL_40975 = 'component_40975';
export function Component40975({ value = 40975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40975, 'data-value': derived.doubled }, children);
}
export default Component40975;
