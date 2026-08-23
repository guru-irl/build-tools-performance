import React from 'react';
const LABEL_34869 = 'component_34869';
export function Component34869({ value = 34869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34869, 'data-value': derived.doubled }, children);
}
export default Component34869;
