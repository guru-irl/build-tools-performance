import React from 'react';
const LABEL_37422 = 'component_37422';
export function Component37422({ value = 37422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37422, 'data-value': derived.doubled }, children);
}
export default Component37422;
