import React from 'react';
const LABEL_18388 = 'component_18388';
export function Component18388({ value = 18388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18388, 'data-value': derived.doubled }, children);
}
export default Component18388;
