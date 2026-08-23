import React from 'react';
const LABEL_37263 = 'component_37263';
export function Component37263({ value = 37263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37263, 'data-value': derived.doubled }, children);
}
export default Component37263;
