import React from 'react';
const LABEL_24415 = 'component_24415';
export function Component24415({ value = 24415, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24415, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24415, 'data-value': derived.doubled }, children);
}
export default Component24415;
