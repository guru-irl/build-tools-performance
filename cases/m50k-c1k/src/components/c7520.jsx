import React from 'react';
const LABEL_7520 = 'component_7520';
export function Component7520({ value = 7520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7520, 'data-value': derived.doubled }, children);
}
export default Component7520;
