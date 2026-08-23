import React from 'react';
const LABEL_4020 = 'component_4020';
export function Component4020({ value = 4020, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4020, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4020, 'data-value': derived.doubled }, children);
}
export default Component4020;
