import React from 'react';
const LABEL_40083 = 'component_40083';
export function Component40083({ value = 40083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40083, 'data-value': derived.doubled }, children);
}
export default Component40083;
