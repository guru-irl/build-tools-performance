import React from 'react';
const LABEL_6259 = 'component_6259';
export function Component6259({ value = 6259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6259, 'data-value': derived.doubled }, children);
}
export default Component6259;
