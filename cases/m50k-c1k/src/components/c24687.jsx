import React from 'react';
const LABEL_24687 = 'component_24687';
export function Component24687({ value = 24687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24687, 'data-value': derived.doubled }, children);
}
export default Component24687;
