import React from 'react';
const LABEL_4082 = 'component_4082';
export function Component4082({ value = 4082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4082, 'data-value': derived.doubled }, children);
}
export default Component4082;
