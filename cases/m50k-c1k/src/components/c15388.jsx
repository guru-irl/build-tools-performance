import React from 'react';
const LABEL_15388 = 'component_15388';
export function Component15388({ value = 15388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15388, 'data-value': derived.doubled }, children);
}
export default Component15388;
