import React from 'react';
const LABEL_16675 = 'component_16675';
export function Component16675({ value = 16675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16675, 'data-value': derived.doubled }, children);
}
export default Component16675;
