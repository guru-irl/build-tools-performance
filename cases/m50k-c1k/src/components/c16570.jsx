import React from 'react';
const LABEL_16570 = 'component_16570';
export function Component16570({ value = 16570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16570, 'data-value': derived.doubled }, children);
}
export default Component16570;
