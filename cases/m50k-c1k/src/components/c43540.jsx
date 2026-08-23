import React from 'react';
const LABEL_43540 = 'component_43540';
export function Component43540({ value = 43540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43540, 'data-value': derived.doubled }, children);
}
export default Component43540;
