import React from 'react';
const LABEL_41112 = 'component_41112';
export function Component41112({ value = 41112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41112, 'data-value': derived.doubled }, children);
}
export default Component41112;
