import React from 'react';
const LABEL_16363 = 'component_16363';
export function Component16363({ value = 16363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16363, 'data-value': derived.doubled }, children);
}
export default Component16363;
