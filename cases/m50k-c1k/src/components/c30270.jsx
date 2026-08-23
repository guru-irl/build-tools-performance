import React from 'react';
const LABEL_30270 = 'component_30270';
export function Component30270({ value = 30270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30270, 'data-value': derived.doubled }, children);
}
export default Component30270;
