import React from 'react';
const LABEL_27983 = 'component_27983';
export function Component27983({ value = 27983, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27983, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27983, 'data-value': derived.doubled }, children);
}
export default Component27983;
