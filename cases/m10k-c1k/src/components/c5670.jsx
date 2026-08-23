import React from 'react';
const LABEL_5670 = 'component_5670';
export function Component5670({ value = 5670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5670, 'data-value': derived.doubled }, children);
}
export default Component5670;
