import React from 'react';
const LABEL_4740 = 'component_4740';
export function Component4740({ value = 4740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4740, 'data-value': derived.doubled }, children);
}
export default Component4740;
