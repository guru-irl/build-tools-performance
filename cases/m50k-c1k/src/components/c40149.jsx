import React from 'react';
const LABEL_40149 = 'component_40149';
export function Component40149({ value = 40149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40149, 'data-value': derived.doubled }, children);
}
export default Component40149;
