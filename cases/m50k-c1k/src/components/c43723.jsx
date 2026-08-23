import React from 'react';
const LABEL_43723 = 'component_43723';
export function Component43723({ value = 43723, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43723, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43723, 'data-value': derived.doubled }, children);
}
export default Component43723;
