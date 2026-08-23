import React from 'react';
const LABEL_4114 = 'component_4114';
export function Component4114({ value = 4114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4114, 'data-value': derived.doubled }, children);
}
export default Component4114;
