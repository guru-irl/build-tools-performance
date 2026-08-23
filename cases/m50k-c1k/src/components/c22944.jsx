import React from 'react';
const LABEL_22944 = 'component_22944';
export function Component22944({ value = 22944, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22944, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22944, 'data-value': derived.doubled }, children);
}
export default Component22944;
