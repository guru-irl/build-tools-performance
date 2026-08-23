import React from 'react';
const LABEL_39401 = 'component_39401';
export function Component39401({ value = 39401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39401, 'data-value': derived.doubled }, children);
}
export default Component39401;
