import React from 'react';
const LABEL_25565 = 'component_25565';
export function Component25565({ value = 25565, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25565, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25565, 'data-value': derived.doubled }, children);
}
export default Component25565;
