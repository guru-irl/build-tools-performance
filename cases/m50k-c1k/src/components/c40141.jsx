import React from 'react';
const LABEL_40141 = 'component_40141';
export function Component40141({ value = 40141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40141, 'data-value': derived.doubled }, children);
}
export default Component40141;
