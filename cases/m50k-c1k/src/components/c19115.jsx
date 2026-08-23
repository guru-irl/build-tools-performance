import React from 'react';
const LABEL_19115 = 'component_19115';
export function Component19115({ value = 19115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19115, 'data-value': derived.doubled }, children);
}
export default Component19115;
