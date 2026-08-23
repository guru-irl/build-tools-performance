import React from 'react';
const LABEL_8015 = 'component_8015';
export function Component8015({ value = 8015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8015, 'data-value': derived.doubled }, children);
}
export default Component8015;
