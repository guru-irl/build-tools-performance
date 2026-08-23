import React from 'react';
const LABEL_10670 = 'component_10670';
export function Component10670({ value = 10670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10670, 'data-value': derived.doubled }, children);
}
export default Component10670;
