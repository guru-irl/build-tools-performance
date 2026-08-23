import React from 'react';
const LABEL_388 = 'component_388';
export function Component388({ value = 388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_388, 'data-value': derived.doubled }, children);
}
export default Component388;
