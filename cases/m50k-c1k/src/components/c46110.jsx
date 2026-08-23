import React from 'react';
const LABEL_46110 = 'component_46110';
export function Component46110({ value = 46110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46110, 'data-value': derived.doubled }, children);
}
export default Component46110;
