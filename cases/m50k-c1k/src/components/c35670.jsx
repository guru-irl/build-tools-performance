import React from 'react';
const LABEL_35670 = 'component_35670';
export function Component35670({ value = 35670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35670, 'data-value': derived.doubled }, children);
}
export default Component35670;
