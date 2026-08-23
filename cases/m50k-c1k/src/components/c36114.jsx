import React from 'react';
const LABEL_36114 = 'component_36114';
export function Component36114({ value = 36114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36114, 'data-value': derived.doubled }, children);
}
export default Component36114;
