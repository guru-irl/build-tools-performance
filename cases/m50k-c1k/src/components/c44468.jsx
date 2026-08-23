import React from 'react';
const LABEL_44468 = 'component_44468';
export function Component44468({ value = 44468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44468, 'data-value': derived.doubled }, children);
}
export default Component44468;
