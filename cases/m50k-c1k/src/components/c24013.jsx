import React from 'react';
const LABEL_24013 = 'component_24013';
export function Component24013({ value = 24013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24013, 'data-value': derived.doubled }, children);
}
export default Component24013;
