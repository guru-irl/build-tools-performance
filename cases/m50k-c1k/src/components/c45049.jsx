import React from 'react';
const LABEL_45049 = 'component_45049';
export function Component45049({ value = 45049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45049, 'data-value': derived.doubled }, children);
}
export default Component45049;
