import React from 'react';
const LABEL_40136 = 'component_40136';
export function Component40136({ value = 40136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40136, 'data-value': derived.doubled }, children);
}
export default Component40136;
