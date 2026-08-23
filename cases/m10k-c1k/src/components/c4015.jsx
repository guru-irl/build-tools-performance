import React from 'react';
const LABEL_4015 = 'component_4015';
export function Component4015({ value = 4015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4015, 'data-value': derived.doubled }, children);
}
export default Component4015;
