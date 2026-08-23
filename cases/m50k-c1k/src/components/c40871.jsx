import React from 'react';
const LABEL_40871 = 'component_40871';
export function Component40871({ value = 40871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40871, 'data-value': derived.doubled }, children);
}
export default Component40871;
