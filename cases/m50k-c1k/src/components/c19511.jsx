import React from 'react';
const LABEL_19511 = 'component_19511';
export function Component19511({ value = 19511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19511, 'data-value': derived.doubled }, children);
}
export default Component19511;
