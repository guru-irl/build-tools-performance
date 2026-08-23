import React from 'react';
const LABEL_24447 = 'component_24447';
export function Component24447({ value = 24447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24447, 'data-value': derived.doubled }, children);
}
export default Component24447;
