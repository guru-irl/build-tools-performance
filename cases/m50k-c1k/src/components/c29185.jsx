import React from 'react';
const LABEL_29185 = 'component_29185';
export function Component29185({ value = 29185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29185, 'data-value': derived.doubled }, children);
}
export default Component29185;
