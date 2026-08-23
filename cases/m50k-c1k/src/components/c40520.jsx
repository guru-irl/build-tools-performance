import React from 'react';
const LABEL_40520 = 'component_40520';
export function Component40520({ value = 40520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40520, 'data-value': derived.doubled }, children);
}
export default Component40520;
