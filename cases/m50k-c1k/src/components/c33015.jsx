import React from 'react';
const LABEL_33015 = 'component_33015';
export function Component33015({ value = 33015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33015, 'data-value': derived.doubled }, children);
}
export default Component33015;
