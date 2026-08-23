import React from 'react';
const LABEL_11570 = 'component_11570';
export function Component11570({ value = 11570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11570, 'data-value': derived.doubled }, children);
}
export default Component11570;
