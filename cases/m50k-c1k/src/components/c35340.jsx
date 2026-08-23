import React from 'react';
const LABEL_35340 = 'component_35340';
export function Component35340({ value = 35340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35340, 'data-value': derived.doubled }, children);
}
export default Component35340;
