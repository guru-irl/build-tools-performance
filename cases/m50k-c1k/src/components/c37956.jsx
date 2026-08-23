import React from 'react';
const LABEL_37956 = 'component_37956';
export function Component37956({ value = 37956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37956, 'data-value': derived.doubled }, children);
}
export default Component37956;
