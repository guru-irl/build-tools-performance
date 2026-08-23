import React from 'react';
const LABEL_35066 = 'component_35066';
export function Component35066({ value = 35066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35066, 'data-value': derived.doubled }, children);
}
export default Component35066;
