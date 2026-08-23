import React from 'react';
const LABEL_15258 = 'component_15258';
export function Component15258({ value = 15258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15258, 'data-value': derived.doubled }, children);
}
export default Component15258;
