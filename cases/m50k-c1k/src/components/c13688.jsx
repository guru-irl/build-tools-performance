import React from 'react';
const LABEL_13688 = 'component_13688';
export function Component13688({ value = 13688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13688, 'data-value': derived.doubled }, children);
}
export default Component13688;
