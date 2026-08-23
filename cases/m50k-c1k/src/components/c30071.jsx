import React from 'react';
const LABEL_30071 = 'component_30071';
export function Component30071({ value = 30071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30071, 'data-value': derived.doubled }, children);
}
export default Component30071;
