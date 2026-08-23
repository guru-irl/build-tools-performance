import React from 'react';
const LABEL_40896 = 'component_40896';
export function Component40896({ value = 40896, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40896, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40896, 'data-value': derived.doubled }, children);
}
export default Component40896;
