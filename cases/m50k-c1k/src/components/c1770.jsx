import React from 'react';
const LABEL_1770 = 'component_1770';
export function Component1770({ value = 1770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1770, 'data-value': derived.doubled }, children);
}
export default Component1770;
