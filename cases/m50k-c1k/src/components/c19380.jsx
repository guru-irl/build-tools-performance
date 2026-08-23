import React from 'react';
const LABEL_19380 = 'component_19380';
export function Component19380({ value = 19380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19380, 'data-value': derived.doubled }, children);
}
export default Component19380;
