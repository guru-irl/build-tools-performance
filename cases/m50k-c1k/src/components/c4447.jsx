import React from 'react';
const LABEL_4447 = 'component_4447';
export function Component4447({ value = 4447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4447, 'data-value': derived.doubled }, children);
}
export default Component4447;
