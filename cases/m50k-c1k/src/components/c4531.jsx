import React from 'react';
const LABEL_4531 = 'component_4531';
export function Component4531({ value = 4531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4531, 'data-value': derived.doubled }, children);
}
export default Component4531;
