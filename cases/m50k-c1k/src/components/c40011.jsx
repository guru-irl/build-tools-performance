import React from 'react';
const LABEL_40011 = 'component_40011';
export function Component40011({ value = 40011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40011, 'data-value': derived.doubled }, children);
}
export default Component40011;
