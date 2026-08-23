import React from 'react';
const LABEL_25716 = 'component_25716';
export function Component25716({ value = 25716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25716, 'data-value': derived.doubled }, children);
}
export default Component25716;
