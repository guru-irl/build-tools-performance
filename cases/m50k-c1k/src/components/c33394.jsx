import React from 'react';
const LABEL_33394 = 'component_33394';
export function Component33394({ value = 33394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33394, 'data-value': derived.doubled }, children);
}
export default Component33394;
