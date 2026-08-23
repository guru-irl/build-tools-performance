import React from 'react';
const LABEL_26015 = 'component_26015';
export function Component26015({ value = 26015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26015, 'data-value': derived.doubled }, children);
}
export default Component26015;
