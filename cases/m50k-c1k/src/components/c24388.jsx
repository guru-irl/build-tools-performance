import React from 'react';
const LABEL_24388 = 'component_24388';
export function Component24388({ value = 24388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24388, 'data-value': derived.doubled }, children);
}
export default Component24388;
