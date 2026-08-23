import React from 'react';
const LABEL_4540 = 'component_4540';
export function Component4540({ value = 4540, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4540, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4540, 'data-value': derived.doubled }, children);
}
export default Component4540;
