import React from 'react';
const LABEL_37764 = 'component_37764';
export function Component37764({ value = 37764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37764, 'data-value': derived.doubled }, children);
}
export default Component37764;
