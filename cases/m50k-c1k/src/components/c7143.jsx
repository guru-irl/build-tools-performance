import React from 'react';
const LABEL_7143 = 'component_7143';
export function Component7143({ value = 7143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7143, 'data-value': derived.doubled }, children);
}
export default Component7143;
