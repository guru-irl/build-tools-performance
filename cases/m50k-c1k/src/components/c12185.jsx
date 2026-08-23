import React from 'react';
const LABEL_12185 = 'component_12185';
export function Component12185({ value = 12185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12185, 'data-value': derived.doubled }, children);
}
export default Component12185;
