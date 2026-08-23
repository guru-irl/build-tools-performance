import React from 'react';
const LABEL_4258 = 'component_4258';
export function Component4258({ value = 4258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4258, 'data-value': derived.doubled }, children);
}
export default Component4258;
