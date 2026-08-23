import React from 'react';
const LABEL_37814 = 'component_37814';
export function Component37814({ value = 37814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37814, 'data-value': derived.doubled }, children);
}
export default Component37814;
