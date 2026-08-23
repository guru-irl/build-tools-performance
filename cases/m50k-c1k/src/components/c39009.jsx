import React from 'react';
const LABEL_39009 = 'component_39009';
export function Component39009({ value = 39009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39009, 'data-value': derived.doubled }, children);
}
export default Component39009;
