import React from 'react';
const LABEL_1223 = 'component_1223';
export function Component1223({ value = 1223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1223, 'data-value': derived.doubled }, children);
}
export default Component1223;
