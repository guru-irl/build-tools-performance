import React from 'react';
const LABEL_37995 = 'component_37995';
export function Component37995({ value = 37995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37995, 'data-value': derived.doubled }, children);
}
export default Component37995;
