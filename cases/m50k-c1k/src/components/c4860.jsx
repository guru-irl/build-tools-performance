import React from 'react';
const LABEL_4860 = 'component_4860';
export function Component4860({ value = 4860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4860, 'data-value': derived.doubled }, children);
}
export default Component4860;
