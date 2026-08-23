import React from 'react';
const LABEL_35894 = 'component_35894';
export function Component35894({ value = 35894, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35894, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35894, 'data-value': derived.doubled }, children);
}
export default Component35894;
