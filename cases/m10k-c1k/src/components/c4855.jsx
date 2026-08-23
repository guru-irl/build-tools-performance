import React from 'react';
const LABEL_4855 = 'component_4855';
export function Component4855({ value = 4855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4855, 'data-value': derived.doubled }, children);
}
export default Component4855;
