import React from 'react';
const LABEL_4596 = 'component_4596';
export function Component4596({ value = 4596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4596, 'data-value': derived.doubled }, children);
}
export default Component4596;
