import React from 'react';
const LABEL_26259 = 'component_26259';
export function Component26259({ value = 26259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26259, 'data-value': derived.doubled }, children);
}
export default Component26259;
