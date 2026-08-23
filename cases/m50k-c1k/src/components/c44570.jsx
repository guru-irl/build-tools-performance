import React from 'react';
const LABEL_44570 = 'component_44570';
export function Component44570({ value = 44570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44570, 'data-value': derived.doubled }, children);
}
export default Component44570;
