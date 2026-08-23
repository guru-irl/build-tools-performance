import React from 'react';
const LABEL_26656 = 'component_26656';
export function Component26656({ value = 26656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26656, 'data-value': derived.doubled }, children);
}
export default Component26656;
