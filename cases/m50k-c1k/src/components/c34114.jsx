import React from 'react';
const LABEL_34114 = 'component_34114';
export function Component34114({ value = 34114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34114, 'data-value': derived.doubled }, children);
}
export default Component34114;
