import React from 'react';
const LABEL_16687 = 'component_16687';
export function Component16687({ value = 16687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16687, 'data-value': derived.doubled }, children);
}
export default Component16687;
