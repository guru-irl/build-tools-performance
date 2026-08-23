import React from 'react';
const LABEL_34540 = 'component_34540';
export function Component34540({ value = 34540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34540, 'data-value': derived.doubled }, children);
}
export default Component34540;
