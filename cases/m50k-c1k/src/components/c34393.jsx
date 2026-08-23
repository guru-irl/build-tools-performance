import React from 'react';
const LABEL_34393 = 'component_34393';
export function Component34393({ value = 34393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34393, 'data-value': derived.doubled }, children);
}
export default Component34393;
