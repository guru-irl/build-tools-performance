import React from 'react';
const LABEL_37686 = 'component_37686';
export function Component37686({ value = 37686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37686, 'data-value': derived.doubled }, children);
}
export default Component37686;
