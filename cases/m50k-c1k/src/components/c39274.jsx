import React from 'react';
const LABEL_39274 = 'component_39274';
export function Component39274({ value = 39274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39274, 'data-value': derived.doubled }, children);
}
export default Component39274;
