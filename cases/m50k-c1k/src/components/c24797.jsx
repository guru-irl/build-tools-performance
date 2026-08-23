import React from 'react';
const LABEL_24797 = 'component_24797';
export function Component24797({ value = 24797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24797, 'data-value': derived.doubled }, children);
}
export default Component24797;
