import React from 'react';
const LABEL_5184 = 'component_5184';
export function Component5184({ value = 5184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5184, 'data-value': derived.doubled }, children);
}
export default Component5184;
