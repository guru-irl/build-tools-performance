import React from 'react';
const LABEL_1230 = 'component_1230';
export function Component1230({ value = 1230, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1230, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1230, 'data-value': derived.doubled }, children);
}
export default Component1230;
