import React from 'react';
const LABEL_4443 = 'component_4443';
export function Component4443({ value = 4443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4443, 'data-value': derived.doubled }, children);
}
export default Component4443;
