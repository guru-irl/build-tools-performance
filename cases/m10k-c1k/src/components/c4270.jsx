import React from 'react';
const LABEL_4270 = 'component_4270';
export function Component4270({ value = 4270, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4270, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4270, 'data-value': derived.doubled }, children);
}
export default Component4270;
