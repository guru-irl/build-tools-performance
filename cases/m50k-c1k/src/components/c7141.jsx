import React from 'react';
const LABEL_7141 = 'component_7141';
export function Component7141({ value = 7141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7141, 'data-value': derived.doubled }, children);
}
export default Component7141;
