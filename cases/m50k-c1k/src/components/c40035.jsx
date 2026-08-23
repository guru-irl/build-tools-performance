import React from 'react';
const LABEL_40035 = 'component_40035';
export function Component40035({ value = 40035, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40035, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40035, 'data-value': derived.doubled }, children);
}
export default Component40035;
