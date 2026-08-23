import React from 'react';
const LABEL_19901 = 'component_19901';
export function Component19901({ value = 19901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19901, 'data-value': derived.doubled }, children);
}
export default Component19901;
