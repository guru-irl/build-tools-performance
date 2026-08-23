import React from 'react';
const LABEL_37866 = 'component_37866';
export function Component37866({ value = 37866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37866, 'data-value': derived.doubled }, children);
}
export default Component37866;
