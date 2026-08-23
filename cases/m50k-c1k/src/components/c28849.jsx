import React from 'react';
const LABEL_28849 = 'component_28849';
export function Component28849({ value = 28849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28849, 'data-value': derived.doubled }, children);
}
export default Component28849;
