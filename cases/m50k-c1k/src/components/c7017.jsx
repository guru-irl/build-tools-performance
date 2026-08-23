import React from 'react';
const LABEL_7017 = 'component_7017';
export function Component7017({ value = 7017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7017, 'data-value': derived.doubled }, children);
}
export default Component7017;
