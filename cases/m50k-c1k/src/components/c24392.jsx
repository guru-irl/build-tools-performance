import React from 'react';
const LABEL_24392 = 'component_24392';
export function Component24392({ value = 24392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24392, 'data-value': derived.doubled }, children);
}
export default Component24392;
