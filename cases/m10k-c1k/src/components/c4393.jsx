import React from 'react';
const LABEL_4393 = 'component_4393';
export function Component4393({ value = 4393, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4393, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4393, 'data-value': derived.doubled }, children);
}
export default Component4393;
