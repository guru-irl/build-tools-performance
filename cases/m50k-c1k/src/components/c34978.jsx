import React from 'react';
const LABEL_34978 = 'component_34978';
export function Component34978({ value = 34978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34978, 'data-value': derived.doubled }, children);
}
export default Component34978;
