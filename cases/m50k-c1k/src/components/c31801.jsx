import React from 'react';
const LABEL_31801 = 'component_31801';
export function Component31801({ value = 31801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31801, 'data-value': derived.doubled }, children);
}
export default Component31801;
