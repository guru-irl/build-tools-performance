import React from 'react';
const LABEL_4180 = 'component_4180';
export function Component4180({ value = 4180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4180, 'data-value': derived.doubled }, children);
}
export default Component4180;
