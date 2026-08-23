import React from 'react';
const LABEL_46561 = 'component_46561';
export function Component46561({ value = 46561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46561, 'data-value': derived.doubled }, children);
}
export default Component46561;
