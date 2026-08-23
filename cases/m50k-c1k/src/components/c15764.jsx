import React from 'react';
const LABEL_15764 = 'component_15764';
export function Component15764({ value = 15764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15764, 'data-value': derived.doubled }, children);
}
export default Component15764;
