import React from 'react';
const LABEL_5458 = 'component_5458';
export function Component5458({ value = 5458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5458, 'data-value': derived.doubled }, children);
}
export default Component5458;
