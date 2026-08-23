import React from 'react';
const LABEL_1259 = 'component_1259';
export function Component1259({ value = 1259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1259, 'data-value': derived.doubled }, children);
}
export default Component1259;
