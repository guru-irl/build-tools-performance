import React from 'react';
const LABEL_24422 = 'component_24422';
export function Component24422({ value = 24422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24422, 'data-value': derived.doubled }, children);
}
export default Component24422;
