import React from 'react';
const LABEL_18395 = 'component_18395';
export function Component18395({ value = 18395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18395, 'data-value': derived.doubled }, children);
}
export default Component18395;
