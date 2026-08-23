import React from 'react';
const LABEL_4402 = 'component_4402';
export function Component4402({ value = 4402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4402, 'data-value': derived.doubled }, children);
}
export default Component4402;
