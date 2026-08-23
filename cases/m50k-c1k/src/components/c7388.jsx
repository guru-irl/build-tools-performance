import React from 'react';
const LABEL_7388 = 'component_7388';
export function Component7388({ value = 7388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7388, 'data-value': derived.doubled }, children);
}
export default Component7388;
