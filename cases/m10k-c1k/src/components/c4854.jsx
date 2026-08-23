import React from 'react';
const LABEL_4854 = 'component_4854';
export function Component4854({ value = 4854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4854, 'data-value': derived.doubled }, children);
}
export default Component4854;
