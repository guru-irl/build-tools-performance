import React from 'react';
const LABEL_14185 = 'component_14185';
export function Component14185({ value = 14185, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14185, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14185, 'data-value': derived.doubled }, children);
}
export default Component14185;
